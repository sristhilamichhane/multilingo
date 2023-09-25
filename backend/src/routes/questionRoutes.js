import { Router } from "express";
import {
  createQuestion,
  getAllQuestions,
  getQuestionByLevel,
} from "../controllers/questionController";
import auth from "../middlewares/isAuthenticated";
import isAdmin from "../middlewares/isAdmin";

const router = Router();

router
  .post("/create", auth, isAdmin, createQuestion)
  .get("/", getAllQuestions)
  .get("/level/:level", getQuestionByLevel);

export default router;
