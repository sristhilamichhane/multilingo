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
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);

      if (response.status === 200) {
        // Determine the role of the user
        localStorage.setItem("user", JSON.stringify(response));
        // Redirect to the appropriate home page based on the role
        if (response.data.user.role === "admin") {
          navigate("/AdminHome");
        } else {
          navigate("/UserHome");
        }
      } else {
        // Handle login failure (e.g., display an error message)
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="gradientLight">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }} // Center vertically on the page
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper
            elevation={3}
            style={{ padding: "20px", backgroundColor: "honeydew" }}
          >
            <Container>
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  label="Email Address"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  label="Password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <hr />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
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
              </form>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
