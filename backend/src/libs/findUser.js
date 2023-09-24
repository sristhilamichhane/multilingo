import jwt from "jsonwebtoken";
import { prisma } from "./prisma";

export const findUser = async (req) => {
  const { id: userId } = jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_SECRET
  );
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
