import { Router } from "express";
import {
  createQuestion,
  getAllQuestions,
  getQuestionByLevel,
} from "../controllers/questionController";

const router = Router();

router
  .post("/create", createQuestion)
  .get("/", getAllQuestions)
  .get("/level/:level", getQuestionByLevel);

export default router;
