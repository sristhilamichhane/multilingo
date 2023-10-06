import {
  Button,
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../Pages/Home.css";
import AdminNavbar from "../../Pages/adminPages/AdminNavbar";
import AdminSidebar from "../../Pages/adminPages/AdminSidebar";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const AdminProfile = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="bgColor">
        <AdminNavbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <AdminSidebar />
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
                      <strong>Name:</strong> {userData.name} Work
                    </Typography>
                    <Typography variant="body1">
                      <strong>Email:</strong> {userData.email} work@gmail.com
                    </Typography>
                    {userData.role === "admin" ? (
                      <div>
                        {/* Additional content for admin */}
                        <Typography variant="body1">
                          <strong>Admin Information:</strong> Display
                          admin-specific details here.
                        </Typography>
                      </div>
                    ) : (
                      <div>
                        {/* Additional content for admin */}
                        <Typography variant="body1">
                          <strong>Admin Information:</strong> Super Admin
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

export default AdminProfile;
