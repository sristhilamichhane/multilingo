import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const IntermediateLesson = () => {
  const lessons = [
    {
      title: "Section 1",
      english: "How are you doing?",
      nepali: "तपाईंलाई कस्तो छ? (Tapailai kasto cha?)",
    },
    {
      title: "Section 2",
      english: "I don't understand",
      nepali: "मैले सम्झिन सक्दिन (Maile samjhina sakdina)",
    },
    {
      title: "Section 3",
      english: "Where is the restroom?",
      nepali: "शौचालय कहाँ छ? (Shauchalaya kaha chha?)",
    },
    // Add more lessons here
    {
      title: "Section 4",
      english: "What time is it?",
      nepali: "कति बजे छ? (Kati baje cha?)",
    },
    {
      title: "Section 5",
      english: "I need help",
      nepali: "मलाई सहयोग चाहिए (Malai sahayog chahiye)",
    },
    {
      title: "Section 6",
      english: "Do you speak English?",
      nepali: "तपाईंलाई अंग्रेजी बोल्नुहुन्छ? (Tapailai angreji bolnuhunchha?)",
    },
    {
      title: "Section 7",
      english: "Can you repeat that, please?",
      nepali:
        "कृपया त्यो फेरी गर्न सक्नुहुन्छ? (Kripaya tyo feri garnu saknuhunchha?)",
    },
    {
      title: "Section 8",
      english: "Where is the nearest bank?",
      nepali: "नजिकैको बैंक कहाँ छ? (Najikaiko bank kaha chha?)",
    },
    {
      title: "Section 9",
      english: "What is this called?",
      nepali: "यसलाई के भनिन्छ? (Yasalai ke bhaninchha?)",
    },
    {
      title: "Section 10",
      english: "I'm sorry, I don't know",
      nepali:
        "माफ गर्नुहोला, मलाई थाहा छैन (Maaf garnuhola, malai thaha chaina)",
    },
  ];

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Intermediate Section
              </Typography>
              <Grid container spacing={2}>
                {lessons.map((lesson, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ height: "38vh" }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                          {lesson.title}
                        </Typography>
                        <Typography variant="body1">
                          English: {lesson.english}
                          <br />
                          Nepali: {lesson.nepali}
                        </Typography>
                        <Stack direction="row" gap={2}>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => speakText(lesson.english)}
                            sx={{ mt: 2 }}
                          >
                            Speak English
                          </Button>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => speakText(lesson.nepali)}
                            sx={{ mt: 2 }}
                          >
                            Speak Nepali
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Stack
                direction="row"
                gap={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    navigate("/basicLesson");
                  }}
                  sx={{ mt: 2 }}
                >
                  Back to Basic Lesson
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    navigate("/advanceLesson");
                  }}
                  sx={{ mt: 2 }}
                >
                  Go to Advanced Lesson
                </Button>
              </Stack>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default IntermediateLesson;
