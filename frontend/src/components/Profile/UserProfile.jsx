import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../Pages/Home.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const UserProfile = () => {
  const navigate = useNavigate();
  // Sample user data (you can replace this with actual user data)
  const userData = {
    name: "john ",
    email: "john@example.com",
    role: "user",
  };

  const handleLogout = () => {
    // Implement logout functionality here
    navigate("/login");
  };

  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Paper
                elevation={3}
                sx={{ padding: 2 }}
                className="gradientLight"
              >
                <Typography variant="h4" gutterBottom>
                  User Profile
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Avatar sx={{ width: 100, height: 100 }}>
                        {/* You can add a user's profile picture here */}
                      </Avatar>
                      <Typography variant="h6" mt={1}>
                        {userData.name}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1">
                      <strong>Name:</strong> {userData.name}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Email:</strong> {userData.email}
                    </Typography>
                    {userData.role === "admin" && (
                      <div>
                        {/* Additional content for admin */}
                        <Typography variant="body1">
                          <strong>Admin Information:</strong> Display
                          admin-specific details here.
                        </Typography>
                      </div>
                    )}
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Paper>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default UserProfile;
