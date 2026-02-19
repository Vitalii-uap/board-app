import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import advertisementRouter from "./routes/AdvertisementRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Підключення до бази даних
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Маршрути
app.use("/api/ads", advertisementRouter);

// Головний маршрут
app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

app.listen(PORT, () => {
  console.log(`Server sarted on port ${PORT}`);
});
