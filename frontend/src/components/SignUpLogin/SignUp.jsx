import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../../Pages/Home.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role is set to "user"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful signup
        const userData = await response.json();
        // Save user data to local storage
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/login"); // Redirect to login page
      } else {
        // Handle signup error (e.g., display an error message)
        alert("Signup failed. Please try again.");
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
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper
            elevation={3}
            style={{ padding: "20px", backgroundColor: "honeydew" }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <Typography variant="subtitle1">Select Role:</Typography>
                    <RadioGroup
                      row
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                    >
                      <FormControlLabel
                        value="user"
                        control={<Radio />}
                        label="User"
                      />
                      <FormControlLabel
                        value="admin"
                        control={<Radio />}
                        label="Admin"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <br />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                  <br />
                  <br />
                  <hr />
                  <br />
                  <Typography>
                    Already have an account? <Link to="/login">Login</Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
