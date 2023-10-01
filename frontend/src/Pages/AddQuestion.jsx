import { Box, styled } from "@mui/material";
import AdminSidebar from "./adminPages/AdminSidebar";
import AdminNavbar from "./adminPages/AdminNavbar";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import axios from "axios"; // Import Axios

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleOptionChange = (event, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = event.target.value;
    setOptions(updatedOptions);
  };

  const handleAddQuestion = async () => {
    // Create a new question object
    const newQuestion = {
      question,
      answer: correctOption, // Use correctOption as answer
      option1: options[0],
      option2: options[1],
      option3: options[2],
      option4: options[3],
      level: "your_level_here", // Set the level as needed
    };

    try {
      // Send a POST request to create the question
      const response = await axios.post(
        "http://localhost:3000/api/questions/create", // Update the URL to match your API route
        newQuestion
      );

      if (response.status === 200) {
        // Question was successfully created
        setQuestions([...questions, response.data.question]);
        setQuestion("");
        setOptions(["", "", "", ""]);
        setCorrectOption("");
      } else {
        // Handle error
        alert("Failed to create the question");
      }
    } catch (error) {
      console.error("Error creating question:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="bgColor">
        <AdminNavbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <AdminSidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Box>
                <TextField
                  label="Question"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                />
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Options</FormLabel>
                  <Grid container spacing={2} margin={2}>
                    {options.map((option, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <TextField
                          label={`Option ${index + 1}`}
                          value={option}
                          onChange={(event) => handleOptionChange(event, index)}
                          fullWidth
                          variant="outlined"
                          margin="normal"
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormControl>
                <br />
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend" sx={{ marginBottom: 2 }}>
                    Correct Option
                  </FormLabel>
                  <RadioGroup
                    value={correctOption}
                    onChange={(event) => setCorrectOption(event.target.value)}
                    row
                  >
                    {options.map((option, index) => (
                      <FormControlLabel
                        key={index}
                        value={`${index}`}
                        control={<Radio />}
                        label={`Option ${index + 1}`}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <br />
                <Button
                  variant="contained"
                  onClick={handleAddQuestion}
                  sx={{ mt: 2 }}
                >
                  Add Question
                </Button>

                {questions.length > 0 && (
                  <Box sx={{ marginTop: "1rem" }}>
                    {questions.map((q, index) => (
                      <Card key={index} sx={{ marginTop: "1rem" }}>
                        <CardContent>
                          <h3>New Question:</h3>
                          <p>{q.question}</p>
                          <div>
                            {q.options.map((option, optionIndex) => (
                              <Button
                                key={optionIndex}
                                variant="outlined"
                                sx={{
                                  marginRight: "1rem",
                                  marginBottom: "1rem",
                                }}
                              >
                                {option}
                              </Button>
                            ))}
                          </div>
                          <p>
                            Correct Option: Option {Number(q.correctOption) + 1}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default AddQuestion;
