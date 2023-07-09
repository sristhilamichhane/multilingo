import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container maxWidth="xs">
      <Paper sx={{ padding: 2, marginTop: 10 }}>
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
              <Link to="/login">Already have account? Login</Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
