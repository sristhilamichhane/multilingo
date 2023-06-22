import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
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

const Practice = () => {
  const givenSentence = ` मेरो नाम राजा हो म नेपाल बाट हुन् र म नेपाली भाषा
  बोल्छु मलाई नेपाली भाषा पढ्न र लेख्नन मन पर्छ मेरो
  परिवारमा मेरो बाबु आमा र दाजु भाइ छन् मैले उच्च
  शिक्षा पूरा गरेको छु र हाल मैले कम्प्युटर संग सम्बन्धित
  काम गर्छु म गीत सुन्ने पुस्तक पढ्ने र मित्रहरूसंग समय
  बिताउने गर्छु`;

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
                        Mero name Raja ho. Ma Nepal bata hu ra ma Nepali vasha
                        bolxu. Malai Nepali vasha padhna ra lekhna man parxa.
                        Mero paribarma mero baba, aama, ra daju-vai chhan. Maile
                        uchha sikxya pura gareko chhu ra hal maile computer
                        sanga sambandhit kam garxu. Ma geet sunne, Pustak
                        padhne, ra mitra haru sanga samaye bitaune garxu.
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

export default Practice;
