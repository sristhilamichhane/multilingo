import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, pt: 5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{ width: "100%", height: 30 + "vh" }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: 700, // Custom font weight
                          fontSize: "24px", // Custom font size
                          color: "black", // Custom text color
                          marginBottom: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Basics
                      </Typography>

                      <Typography variant="body2">
                        Welcome to the fundamental quiz repository, your go-to
                        resource for mastering the essentials of your chosen
                        language.
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => {
                          navigate("/basicQuiz");
                        }}
                      >
                        Start
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{ width: "100%", height: 30 + "vh" }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: 700, // Custom font weight
                          fontSize: "24px", // Custom font size
                          color: "black", // Custom text color
                          marginBottom: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Intermediate
                      </Typography>
                      <Typography variant="body2">
                        Welcome to the intermediate quiz collection, the perfect
                        resource to advance your skills in your chosen language.
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => {
                          navigate("/intermediateQuiz");
                        }}
                      >
                        Start
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{ width: "100%", height: 30 + "vh" }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: 700, // Custom font weight
                          fontSize: "24px", // Custom font size
                          color: "black", // Custom text color
                          marginBottom: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Advance
                      </Typography>
                      <Typography variant="body2">
                        Welcome to the advanced quiz compilation, the ultimate
                        resource to elevate your mastery of your chosen language
                        to the highest level.
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => {
                          navigate("/advanceQuiz");
                        }}
                      >
                        Start
                      </Button>
                    </CardActions>
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

export default Quiz;
