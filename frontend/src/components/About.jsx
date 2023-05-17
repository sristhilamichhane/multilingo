import { Box } from "@mui/material";
import Sidebar from "../Sidebar";
const About = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>
    </>
  );
};

export default About;
