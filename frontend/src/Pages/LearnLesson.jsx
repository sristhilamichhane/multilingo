import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const LearnLesson = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>LearnLesson</h1>
        </Box>
      </Box>
    </>
  );
};

export default LearnLesson;
