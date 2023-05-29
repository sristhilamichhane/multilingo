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
                    sx={{ width: "100%", height: 185 }}
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
                    sx={{ width: "100%", height: 185 }}
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
                <Card sx={{ width: "100%" }} className="gradientLight">
                  <Typography gutterBottom variant="h5" component="div">
                    <Stack spacing={2} direction="row">
                      <div className="iconStyle">
                        <GradeIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="scoreTitle"> २५०</span>
                        <br />
                        <span className="scoreSubTitle">अहिलेसम्मको नतिजा</span>
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
                        <span className="scoreTitle"> 250</span>
                        <br />
                        <span className="scoreSubTitle">Results Till Now</span>
                      </div>
                    </Stack>
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card sx={{ height: "60vh" }} className="gradientLight">
                  <CardContent align="center">
                    <WelcomePage />
                  </CardContent>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0px",
                    }}
                    variant="h6"
                  >
                    अनेकता मा एकता
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "60vh" }} className="gradient">
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
