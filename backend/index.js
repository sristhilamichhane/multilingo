import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import questionRoutes from "./src/routes/questionRoutes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
