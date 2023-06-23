import { Box, styled, Typography, Avatar, Card, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const Leaderboard = () => {
  const quizResults = [
    { name: "User 1", avatar: "/avatars/avatar1.png", score: 80 },
    { name: "User 2", avatar: "/avatars/avatar2.png", score: 95 },
    { name: "User 3", avatar: "/avatars/avatar3.png", score: 75 },
    { name: "User 4", avatar: "/avatars/avatar3.png", score: 70 },
    { name: "User 5", avatar: "/avatars/avatar3.png", score: 90 },
    { name: "User 6", avatar: "/avatars/avatar3.png", score: 50 },
    { name: "User 7", avatar: "/avatars/avatar3.png", score: 40 },
    // Add more quiz results data here
  ];

  // Sort the quiz results array by score in descending order
  const sortedResults = [...quizResults].sort((a, b) => b.score - a.score);

  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <MainContent>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  pb: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "blue",
                }}
              >
                Leaderboard
              </Typography>
              {sortedResults.map((user, index) => (
                <Box
                  key={user.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 3,
                  }}
                >
                  <Card
                    sx={{ width: "100%", height: "30%" }}
                    className="gradientLight"
                  >
                    <Stack direction="row" gap={3} p={1}>
                      <Typography
                        variant="h6"
                        sx={{ marginRight: { sm: 1, md: 10 } }}
                      >
                        {index + 1}
                      </Typography>
                      <Avatar
                        alt={user.name}
                        src={user.avatar}
                        sx={{ marginRight: { sm: 1, md: 10 } }}
                      />
                      <Typography>{user.name}</Typography>
                      <Typography variant="h6" sx={{ marginLeft: "auto" }}>
                        Score: {user.score}
                      </Typography>
                    </Stack>
                  </Card>
                </Box>
              ))}
            </Box>
          </MainContent>
        </Box>
      </div>
    </>
  );
};

export default Leaderboard;
