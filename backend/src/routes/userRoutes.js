import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/signup", createUser).post("/login", loginUser);

export default router;
