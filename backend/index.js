import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
