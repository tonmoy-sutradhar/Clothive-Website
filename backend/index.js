dotenv.config();
import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("hello Clothive");
});

app.listen(port, () => {
  console.log("Hello from server");
  connectDb();
});
