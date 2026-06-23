import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import collegeRoutes from "./routes/collegeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/colleges", collegeRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Acadia Backend Running",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});