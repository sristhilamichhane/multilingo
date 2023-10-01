import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { styled } from "@mui/system";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// import "./Home.css";
import { useState } from "react";
import { compareTwoStrings } from "string-similarity";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

const BasicPractice = () => {
  const givenSentence = `हामार नाम सृष्टी छि`;

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "ne-NP" });
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [comparisonResult, setComparisonResult] = useState("");

  const compareSentences = () => {
    const similarity = compareTwoStrings(givenSentence, transcript);
    const result = similarity >= 0.5 ? "Almost Correct!" : "Incorrect!";
    setComparisonResult(result);
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pb: 2,
                  color: "blue",
                }}
              >
                For basic lesson lets do some practice:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      width: "100%",
                      height: { xs: "70vh", sm: "75vh", md: "60vh" },
                    }}
                  >
                    <CardContent>
                      <Typography sx={{ p: 1 }}>{givenSentence}</Typography>
                      <hr />
                      <Typography sx={{ p: 1 }}>
                        Hamar naam sristhi chhi
                      </Typography>
                      <hr />
                      <Typography sx={{ p: 1, color: "blue" }}>
                        Try to verbalize these and check whether you are
                        pronouncing correctly or not!
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ width: "100%", height: "60vh" }}>
                    <CardContent>{transcript}</CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Card sx={{ width: "100%" }} className="gradientLight">
                    <CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={startListening}
                        >
                          Start
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            SpeechRecognition.stopListening();
                            compareSentences();
                          }}
                        >
                          Stop & Check
                        </Button>
                        <Button variant="contained" onClick={resetTranscript}>
                          Reset
                        </Button>
                      </CardActions>
                      {comparisonResult && (
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            pt: 2,
                            color:
                              comparisonResult === "Almost Correct!"
                                ? "green"
                                : "red",
                            fontWeight: "bold",
                          }}
                        >
                          {comparisonResult}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default BasicPractice;
