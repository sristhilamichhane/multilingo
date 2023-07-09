import { Box, Typography, styled } from "@mui/material";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const UserManagement = () => {
  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography>My account</Typography>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default UserManagement;
