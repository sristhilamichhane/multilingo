import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  // Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
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
      title: "Greetings",
      words: [
        { english: "Hello", nepali: "नमस्ते (Namaste)" },
        { english: "Thank you", nepali: "धन्यवाद (Dhanyabad)" },
        { english: "Goodbye", nepali: "बिदाई (Bidai)" },
      ],
    },
    {
      title: "Basics",
      words: [
        { english: "Please", nepali: "कृपया (Kripaya)" },
        { english: "Sorry", nepali: "माफ गर्नुहोस् (Maaf garnuhos)" },
        { english: "Yes", nepali: "हो (Ho)" },
        { english: "No", nepali: "होइन (Hoina)" },
      ],
    },
    {
      title: "Introductions",
      words: [
        {
          english: "How are you?",
          nepali: "तपाईंलाई कस्तो छ? (Tapailai kasto cha?)",
        },
        { english: "I'm fine", nepali: "म ठिकाइ छु (Ma thikai chu)" },
        {
          english: "What is your name?",
          nepali: "तपाईंको नाम के हो? (Tapainko naam ke ho?)",
        },
        {
          english: "My name is...",
          nepali: "मेरो नाम ... हो (Mero naam ... ho)",
        },
      ],
    },
    {
      title: "Polite Phrases",
      words: [
        { english: "Excuse me", nepali: "क्षमा पर्नुहोस् (Kshama parnuhos)" },
        // Add more words here
      ],
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
                  fontWeight: "bold", // Added bold font weight
                }}
              >
                Basic Section
              </Typography>

              {lessons.map((lesson, index) => (
                <TableContainer key={index} component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={3} align="center">
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {lesson.title}
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <b>English</b>
                        </TableCell>
                        <TableCell align="right">
                          <b>Nepali</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {lesson.words.map((word, wordIndex) => (
                        <TableRow key={wordIndex}>
                          <TableCell>
                            {word.english}
                            <IconButton
                              size="small"
                              onClick={() => speakText(word.english)}
                            >
                              <VolumeUp />
                            </IconButton>
                          </TableCell>
                          <TableCell align="right">
                            {word.nepali}
                            <IconButton
                              size="small"
                              onClick={() => speakText(word.nepali)}
                            >
                              <VolumeUp />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ))}
              <Card sx={{ width: "100%" }} className="gradientLight">
                <CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
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
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/learnlesson");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Back to Learn lesson
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/intermediateLesson");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Go to Intermediate Lesson
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/basicQuiz");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Basic Quiz
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/basicPractice");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Basic Practice
                      </Button>
                    </Stack>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default BasicLesson;
