import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

const AddQuestion = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Add Questions</h1>
        </Box>
      </Box>
    </>
  );
};

export default AddQuestion;
