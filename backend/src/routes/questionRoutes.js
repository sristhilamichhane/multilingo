import { Router } from "express";
import {
  createQuestion,
  getAllQuestions,
  getQuestionByLevel,
} from "../controllers/questionController.js";
import auth from "../middlewares/isAuthenticated.js";
import isAdmin from "../middlewares/isAdmin.js";

const router = Router();

router
  .post("/create", auth, isAdmin, createQuestion)
  .get("/", getAllQuestions)
  .get("/level/:level", getQuestionByLevel);

export default router;
