import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
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

const AdvanceLesson = () => {
  const lessons = [
    {
      title: "Complex-Sentences",
      words: [
        {
          english: "What are your hobbies?",
          nepali: "तपाईंको शौक के हो? (Tapainko shauch k ho?)",
        },
        {
          english: "I'm interested in...",
          nepali: "मलाई ... मन पर्छ (Malai ... man parcha)",
        },
        {
          english: "Could you please recommend a good restaurant?",
          nepali:
            "कृपया एक राम्रो भोजनालय सिफारिस गर्नुहुन्छ? (Kripaya ek ramro bhojnalaya sifaris garnuhunchha?)",
        },
        {
          english: "What is the weather like today?",
          nepali: "आजको मौसम कस्तो छ? (Aajko mausam kasto cha?)",
        },
        // Add more words here
      ],
    },
    {
      title: "Advance-conversation",
      words: [
        {
          english: "Do you have any recommendations for places to visit?",
          nepali:
            "तपाईंलाई घुम्ने स्थानहरूको कुनै सिफारिस छ? (Tapailai ghumné sthanharuko kunai sifaris cha?)",
        },
        {
          english: "What is the cost of living in this city?",
          nepali:
            "यस शहरमा बस्ने खर्च कति छ? (Yas shaharma basne kharcha kati cha?)",
        },
        {
          english: "Tell me about the local customs and traditions",
          nepali:
            "स्थानिय रीति निति बारे बताउनुहोस् (Sthaniya reeti niti bare bataunuhos)",
        },
        {
          english: "What are the popular tourist attractions?",
          nepali:
            "प्रसिद्ध यात्रा स्थलहरू कुन कुन छन्? (Prasiddha yatra sthalharu kun kun chan?)",
        },
        {
          english: "I need help with translation",
          nepali:
            "मलाई अनुवादमा मदत चाहिएको छ (Malai anuvadma madat chahiye ko cha)",
        },
        // Add more words here
      ],
    },
    // Add more lessons here
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
                  fontWeight: "bold",
                }}
              >
                Advance Lesson
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
                        Back to Learn Lesson
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/learnLesson");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Go to Learn Lesson
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/advanceQuiz");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Advance Quiz
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/advancePractice");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Advance Practice
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

export default AdvanceLesson;
