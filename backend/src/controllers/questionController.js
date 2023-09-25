import { prisma } from "../libs/prisma";

export const createQuestion = async (req, res) => {
  const { question, answer, option1, option2, option3, option4, level } =
    req.body;

  if (
    !question ||
    !answer ||
    !option1 ||
    !option2 ||
    !option3 ||
    !option4 ||
    !level
  ) {
    return res.status(400).json({ message: "All fields are required" });
  } else {
    try {
      const question = await prisma.question.create({
        data: {
          question,
          answer,
          option1,
          option2,
          option3,
          option4,
          level,
        },
      });
      return res.status(200).json({ question });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    return res.status(200).json({ questions });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getQuestionByLevel = async (req, res) => {
  const { level } = req.params;
  try {
    const questions = await prisma.question.findMany({
      where: {
        level,
      },
      take: 10,
    });
    return res.status(200).json({ questions });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
