import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import questionRoutes from "./src/routes/questionRoutes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
