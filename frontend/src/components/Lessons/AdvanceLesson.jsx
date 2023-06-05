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

const AdvancedLesson = () => {
  const lessons = [
    {
      title: "Section 1",
      english: "What are your hobbies?",
      nepali: "तपाईंको शौक के हो? (Tapainko shauch k ho?)",
    },
    {
      title: "Section 2",
      english: "I'm interested in...",
      nepali: "मलाई ... मन पर्छ (Malai ... man parcha)",
    },
    {
      title: "Section 3",
      english: "Could you please recommend a good restaurant?",
      nepali:
        "कृपया एक राम्रो भोजनालय सिफारिस गर्नुहुन्छ? (Kripaya ek ramro bhojnalaya sifaris garnuhunchha?)",
    },
    // Add more lessons here
    {
      title: "Section 4",
      english: "What is the weather like today?",
      nepali: "आजको मौसम कस्तो छ? (Aajko mausam kasto cha?)",
    },
    {
      title: "Section 5",
      english: "I'm looking for a job",
      nepali: "मलाई काम चाहिएको छ (Malai kaam chahiye ko cha)",
    },
    {
      title: "Section 6",
      english: "Do you have any recommendations for places to visit?",
      nepali:
        "तपाईंलाई घुम्ने स्थानहरूको कुनै सिफारिस छ? (Tapailai ghumné sthanharuko kunai sifaris cha?)",
    },
    {
      title: "Section 7",
      english: "What is the cost of living in this city?",
      nepali:
        "यस शहरमा बस्ने खर्च कति छ? (Yas shaharma basne kharcha kati cha?)",
    },
    {
      title: "Section 8",
      english: "Tell me about the local customs and traditions",
      nepali:
        "स्थानिय रीति निति बारे बताउनुहोस् (Sthaniya reeti niti bare bataunuhos)",
    },
    {
      title: "Section 9",
      english: "What are the popular tourist attractions?",
      nepali:
        "प्रसिद्ध यात्रा स्थलहरू कुन कुन छन्? (Prasiddha yatra sthalharu kun kun chan?)",
    },
    {
      title: "Section 10",
      english: "I need help with translation",
      nepali:
        "मलाई अनुवादमा मदत चाहिएको छ (Malai anuvadma madat chahiye ko cha)",
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
                Advanced Section
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
                    navigate("/intermediateLesson");
                  }}
                  sx={{ mt: 2 }}
                >
                  Back to Intermediate Lesson
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    navigate("/practice");
                  }}
                  sx={{ mt: 2 }}
                >
                  Lets Practice
                </Button>
              </Stack>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default AdvancedLesson;
