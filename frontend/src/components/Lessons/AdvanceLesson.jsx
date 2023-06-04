import { Box, Grid, styled } from "@mui/material";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const AdvanceLesson = () => {
  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, pt: 10 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}></Grid>
              </Grid>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default AdvanceLesson;
