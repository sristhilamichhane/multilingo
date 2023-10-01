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

const IntermediateLesson = () => {
  const lessons = [
    {
      title: "Common-Conversation",
      words: [
        {
          english: "How are you doing?",
          nepali: "अहांक की हाल-चाल? (Ahak ki hal chal)",
        },
        {
          english: "I don't understand",
          nepali: "हम नाहि बुझए छि(Hum nahi bujhiye chi)",
        },
        {
          english: "Where is the restroom?",
          nepali: "शौचालय कतय अछि ? (Shauchalaya kataye aachi)",
        },
        {
          english: "What time is it?",
          nepali: "कोन समय अछि ? (Kon samaye aachi)",
        },
        // Add more words here
      ],
    },
    {
      title: "Phrases-To-Communicate",
      words: [
        {
          english: "I need help",
          nepali: "हमरा मदद चाही (Hamara madad chahie)",
        },
        {
          english: "Do you speak English?",
          nepali: "अहाँ अंग्रेजी बजैत छी? (Aha Angreji bajait chi)",
        },
        {
          english: "Can you repeat that, please?",
          nepali:
            "की अहाँ से दोहरा सकैत छी, कृपया?(Ki aha se dohora skait chi,kripaya)",
        },
        {
          english: "Where is the nearest bank?",
          nepali: "नजिकैको बैंक कहाँ छ? (Najikaiko bank kaha chha?)",
        },
        {
          english: "What is this called?",
          nepali: "यसलाई के भनिन्छ? (Yasalai ke bhaninchha?)",
        },
        {
          english: "I'm sorry, I don't know",
          nepali:
            "माफ गर्नुहोला, मलाई थाहा छैन (Maaf garnuhola, malai thaha chaina)",
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
                Intermediate Lesson
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
                          <b>Maithili</b>
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
                          navigate("/advanceLesson");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Go to Advance Lesson
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/intermediateQuiz");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Intermediate Quiz
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          navigate("/intermediatePractice");
                        }}
                        sx={{ mt: 2 }}
                      >
                        Intermediate Practice
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

export default IntermediateLesson;
