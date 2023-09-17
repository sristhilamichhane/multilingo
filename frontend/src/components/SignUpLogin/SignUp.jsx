import { Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "../../Pages/Home.css";

const SignUp = () => {
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
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                  />
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
                    Already have account ? <Link to="/login"> Login</Link>
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
