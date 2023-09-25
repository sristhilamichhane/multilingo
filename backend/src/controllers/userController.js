import { prisma } from "../libs/prisma.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { hashPassword } from "../libs/hashPassword.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
      role,
    },
  });
  res.send(user);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.hashedPassword);
    if (isMatch) {
      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1y" },
        (err, token) => {
          if (err) {
            throw err;
          }
          return res.send({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
          });
        }
      );
    } else {
      res.status(401).send({ message: "Invalid Credentials" });
    }
  }
};
