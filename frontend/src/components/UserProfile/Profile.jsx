import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "../../Pages/Home.css";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const UserManagement = () => {
  const user = {
    name: "John Doe",
    country: "United States",
    address: "123 Main St",
    email: "john@example.com",
    phoneNumber: "+1 555-123-4567",
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
                        {user.name}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1">
                      <strong>Name:</strong> {user.name}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Country:</strong> {user.country}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Address:</strong> {user.address}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Email:</strong> {user.email}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Phone Number:</strong> {user.phoneNumber}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                {/* Add more profile details or actions as needed */}
              </Paper>
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default UserManagement;
