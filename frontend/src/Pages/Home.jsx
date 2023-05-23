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
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <MainContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ width: "100%", height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      पाठ
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      पहिले सिक्नुहोस् त्यसपछि अभ्यास गर्नुहोस्
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: "100%", height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lesson
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      learn first and practice accordingly
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    अहिलेसम्मको नतिजा २५०
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Results till now 250
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card sx={{ height: "60vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "60vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
        </MainContent>
      </Box>
    </>
  );
};

export default Home;
