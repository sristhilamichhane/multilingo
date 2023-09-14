import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../Pages/Home.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can implement your authentication logic here.
    // For simplicity, let's assume a hardcoded admin login.
    if (username === "admin" && password === "adminpassword") {
      navigate("/AdminHome");
    } else {
      navigate("/UserHome");
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }} // Center vertically on the page
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={3}
          style={{ padding: "20px" }}
          className="gradientLight"
        >
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <TextField
              label="Username"
              fullWidth
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <hr />
            <br />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
            <hr />
            <Typography
              variant="body2"
              align="center"
              style={{ marginTop: "16px" }}
            >
              Dont have an account?{" "}
              <Link href="/signUp" color="primary">
                Sign Up
              </Link>
            </Typography>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
