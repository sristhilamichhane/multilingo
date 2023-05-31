import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import "./Home.css";
import GradeIcon from "@mui/icons-material/Grade";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AccordionHome from "../components/AccordianHome";
import WelcomePage from "../components/WelcomePage";
import ComboBox from "../components/Combobox";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ width: "100%", height: 205 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div>
                        <LocalLibraryIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div">
                        पाठ
                      </Typography>
                      <Typography variant="body2" color="white" component="div">
                        पहिले सिक्नुहोस् त्यसपछि अभ्यास गर्नुहोस्
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ width: "100%", height: 205 }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <div>
                        <LocalLibraryIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div">
                        Lesson
                      </Typography>
                      <Typography variant="body2" color="white">
                        learn first and practice accordingly
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{ width: "100%", height: "50%" }}
                  className="gradientLight"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    <Stack spacing={2} direction="row">
                      <div className="iconStyle">
                        <GradeIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="scoreTitle">
                          <ComboBox />
                        </span>
                        <span className="scoreSubTitle">
                          तपाईलाई थाहा भएको भाषा चयन गर्नुहोस्
                        </span>
                      </div>
                    </Stack>
                  </Typography>
                </Card>

                <Card sx={{ width: "100%" }} className="gradient">
                  <Typography gutterBottom variant="h5" component="div">
                    <Stack spacing={2} direction="row">
                      <div className="iconStyle">
                        <GradeIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="scoreTitle">
                          <ComboBox />{" "}
                        </span>
                        <span className="scoreSubTitle">
                          तपाईंले सिक्न चाहेको भाषा छान्नुहोस्
                        </span>
                      </div>
                    </Stack>
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card sx={{ height: "55vh" }} className="gradientLight">
                  <CardContent align="center">
                    <WelcomePage />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "55vh" }} className="gradient">
                  <CardContent>
                    <Typography variant="h4">Guidance here:</Typography>
                    <br />
                    <AccordionHome />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default Home;
