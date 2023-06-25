import { useState } from "react";
import { Box, Card, Typography, styled, Button } from "@mui/material";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
// import "./Home.css";
import QuizData from "./QuizData";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const IntermediateQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    const selectedOption = clickedOption;
    const correctAnswer = QuizData[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Card sx={{ width: "100%", height: "80vh" }}>
                {showResult ? (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <Typography variant="h4" gutterBottom>
                      Your Score: {score}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Total Score: {QuizData.length}
                    </Typography>
                    <Button variant="contained" onClick={resetAll}>
                      Try Again
                    </Button>
                  </Box>
                ) : (
                  <>
                    <Box p={2}>
                      <Typography variant="h6" gutterBottom>
                        Question {currentQuestion + 1}:
                      </Typography>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        fontWeight="bold"
                      >
                        {QuizData[currentQuestion].question}
                      </Typography>
                    </Box>
                    <Box
                      p={2}
                      display="flex"
                      justifyContent="center"
                      flexDirection="column"
                      alignItems="center"
                    >
                      {QuizData[currentQuestion].options.map(
                        (option, index) => (
                          <Box key={index} sx={{ m: 1, width: "100%" }}>
                            {option.type === "text" && (
                              <>
                                {option.value.map((value, i) => (
                                  <Button
                                    key={i}
                                    variant={
                                      clickedOption === i + 1
                                        ? "contained"
                                        : "outlined"
                                    }
                                    color="primary"
                                    onClick={() => setClickedOption(i + 1)}
                                    sx={{ m: 1, width: "100%" }}
                                  >
                                    {value}
                                  </Button>
                                ))}
                              </>
                            )}
                            {option.type === "audio" && (
                              <audio controls>
                                <source src={option.value} type="audio/mpeg" />
                              </audio>
                            )}
                            {option.type === "image" && (
                              <img
                                src={option.value}
                                alt="Option"
                                style={{ width: "100%" }}
                              />
                            )}
                          </Box>
                        )
                      )}
                    </Box>

                    <Box p={2} display="flex" justifyContent="center">
                      <Button variant="contained" onClick={changeQuestion}>
                        Next
                      </Button>
                    </Box>
                  </>
                )}
              </Card>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default IntermediateQuiz;
