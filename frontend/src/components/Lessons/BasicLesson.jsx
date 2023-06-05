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

const BasicLesson = () => {
  const lessons = [
    {
      title: "Section 1",
      english: "Hello",
      nepali: "नमस्ते (Namaste)",
    },
    {
      title: "Section 2",
      english: "Thank you",
      nepali: "धन्यवाद (Dhanyabad)",
    },
    {
      title: "Section 3",
      english: "Goodbye",
      nepali: "बिदाई (Bidai)",
    },
    // Add more lessons here
    {
      title: "Section 4",
      english: "Please",
      nepali: "कृपया (Kripaya)",
    },
    {
      title: "Section 5",
      english: "Sorry",
      nepali: "माफ गर्नुहोस् (Maaf garnuhos)",
    },
    {
      title: "Section 6",
      english: "Yes",
      nepali: "हो (Ho)",
    },
    {
      title: "Section 7",
      english: "No",
      nepali: "होइन (Hoina)",
    },
    {
      title: "Section 8",
      english: "How are you?",
      nepali: "तपाईंलाई कस्तो छ? (Tapailai kasto cha?)",
    },
    {
      title: "Section 9",
      english: "I'm fine",
      nepali: "म ठिकाइ छु (Ma thikai chu)",
    },
    {
      title: "Section 10",
      english: "What is your name?",
      nepali: "तपाईंको नाम के हो? (Tapainko naam ke ho?)",
    },
    {
      title: "Section 11",
      english: "My name is...",
      nepali: "मेरो नाम ... हो (Mero naam ... ho)",
    },
    {
      title: "Section 12",
      english: "Excuse me",
      nepali: "क्षमा पर्नुहोस् (Kshama parnuhos)",
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
                Basic Section
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
                    navigate("/learnlesson");
                  }}
                  sx={{ mt: 2 }}
                >
                  Back to Learn lesson
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    navigate("/intermediateLesson");
                  }}
                  sx={{ mt: 2 }}
                >
                  Go to Intermediate Lesson
                </Button>
              </Stack>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default BasicLesson;
