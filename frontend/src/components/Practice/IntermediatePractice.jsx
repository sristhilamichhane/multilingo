import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { compareTwoStrings } from "string-similarity";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const sentences = [
  "अहांक की हाल-चाल",
  "हम नाहि बुझए छि  ",
  "कोन समय अछि ",
  "हमरा मदद चाही",
  "नजदीकी बैंक कतय अछि",
];

const IntermediatePractice = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [correctSentences, setCorrectSentences] = useState(0);
  const [incorrectSentences, setIncorrectSentences] = useState(0);
  const [sentenceResult, setSentenceResult] = useState("");
  const [sentenceResults, setSentenceResults] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [showResultDialog, setShowResultDialog] = useState(false);

  const givenSentence = sentences[currentSentenceIndex];

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "hi-IN" });
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const compareSentences = () => {
    const similarity = compareTwoStrings(givenSentence, transcript);
    const result = similarity >= 0.5 ? "Almost Correct!" : "Incorrect!";
    setSentenceResult(result);
    setSentenceResults((prevResults) => [...prevResults, result]);

    if (result === "Almost Correct!") {
      setCorrectSentences(correctSentences + 1);
    } else {
      setIncorrectSentences(incorrectSentences + 1);
    }

    setIsChecking(false);
  };

  const handleNextSentence = () => {
    // Move to the next sentence for practice
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
      resetTranscript(); // Clear the transcript for the next sentence
      setIsChecking(false);
      setSentenceResult("");
    } else {
      // Show the overall result dialog when all sentences are practiced
      setShowResultDialog(true);
    }
  };

  const handleReset = () => {
    // Reset the practice session
    setCurrentSentenceIndex(0);
    setCorrectSentences(0);
    setIncorrectSentences(0);
    setSentenceResult("");
    setSentenceResults([]);
    setIsChecking(false);
    setShowResultDialog(false);
    resetTranscript();
  };

  const handleCloseResultDialog = () => {
    setShowResultDialog(false);
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
                Maithili Advance Speech Practice:
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
                      <Typography sx={{ p: 1, color: "blue" }}>
                        Try to verbalize this sentence and check whether your
                        pronunciation is correct or not!
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ width: "100%", height: "60vh" }}>
                    <CardContent>
                      <Typography>{transcript}</Typography>
                    </CardContent>
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
                        {!isChecking && (
                          <>
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
                              Check
                            </Button>
                            <Button
                              variant="contained"
                              onClick={resetTranscript}
                            >
                              Reset
                            </Button>
                            <Button
                              variant="contained"
                              onClick={handleNextSentence}
                            >
                              Next Sentence
                            </Button>
                          </>
                        )}
                      </CardActions>
                      {isChecking && (
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            pt: 2,
                            color:
                              sentenceResult === "Almost Correct!"
                                ? "green"
                                : "red",
                            fontWeight: "bold",
                          }}
                        >
                          {sentenceResult}
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
      <Dialog
        open={showResultDialog}
        onClose={handleCloseResultDialog}
        aria-labelledby="result-dialog-title"
        aria-describedby="result-dialog-description"
      >
        <DialogTitle id="result-dialog-title">
          {" "}
          <Typography variant="h4">Practice Result</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="result-dialog-description">
            Correct Sentences: {correctSentences}
            <br />
            Incorrect Sentences: {incorrectSentences}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset} color="secondary">
            Start Again
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default IntermediatePractice;
