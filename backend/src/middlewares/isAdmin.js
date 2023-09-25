import jwt from "jsonwebtoken";
import "dotenv/config";
import prisma from "../libs/prisma.js";

const isAdmin = async (req, res, next) => {
  const { id } = jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_SECRET
  );

  if (id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      if (user.isAdmin) {
        next();
      } else {
        res.status(400).json({ success: false, message: "Not a Admin" });
      }
    } else {
      res.status(400).json({ success: false, message: "User not found" });
    }
  }
};

export default isAdmin;
