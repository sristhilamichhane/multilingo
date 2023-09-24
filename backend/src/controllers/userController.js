import { prisma } from "../libs/prisma.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { hashPassword } from "../libs/hashPassword.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
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
              isAdmin: user.isAdmin,
            },
          });
        }
      );
    } else {
      res.status(401).send({ message: "Invalid Credentials" });
    }
  }
};
