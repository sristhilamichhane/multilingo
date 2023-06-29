import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Paper sx={{ padding: 2, marginTop: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
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
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                Login as:
              </Typography>
              <br />
              <Button variant="outlined" color="primary" fullWidth>
                User
              </Button>
              <br />
              <br />
              <Button variant="outlined" color="primary" fullWidth>
                Admin
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link to="/signUp">Doesnot have account? SignUp</Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
