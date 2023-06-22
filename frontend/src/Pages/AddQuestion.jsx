import Navbar from "../components/Navbar";
import { Box, styled } from "@mui/material";
import Sidebar from "../components/Sidebar";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const AddQuestion = () => {
  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default AddQuestion;
