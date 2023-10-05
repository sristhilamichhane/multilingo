import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import Grid from "@mui/material/Grid";
import "../Home.css";
import CountUp from "react-countup";

import BarGraph from "./Charts/BarGraph";
import PieActiveArc from "./Charts/PieChart";
import GeoChart from "./Charts/GeoChart";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const AdminHome = () => {
  return (
    <>
      <div className="bgColor">
        <AdminNavbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <AdminSidebar />
          <MainContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ width: "100%", height: 205 }}
                    className="gradient"
                  >
                    <BarGraph />
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                  className="gradientLight"
                >
                  <CardContent>
                    <Stack
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      direction="column"
                      gap={4}
                    >
                      <Typography variant="h5">Visitors</Typography>
                      <Typography>
                        <CountUp
                          enableScrollSpy:true
                          dealy={1}
                          end={22000}
                          duration={0.3}
                        />
                      </Typography>
                      <span> since last week</span>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card sx={{ height: "55vh" }} className="gradientLight">
                  <CardContent align="center">
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "55vh" }} className="gradient">
                  <CardContent>
                    <Typography variant="h4">User Engagement:</Typography>
                    <br />
                    <PieActiveArc />
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

export default AdminHome;
