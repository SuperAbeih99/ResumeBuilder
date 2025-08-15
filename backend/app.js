require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// Environment-aware CORS
const isProduction = process.env.NODE_ENV === "production";
const allowedOrigin = isProduction
  ? process.env.FRONTEND_URL
  : "http://localhost:3000";

app.use(
  cors({
    origin: allowedOrigin || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

// Serve uploads folder with CORS header
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res) => {
      if (allowedOrigin) {
        res.set("Access-Control-Allow-Origin", allowedOrigin);
      }
    },
  })
);
app.get("/", (req, res) => {
  res.json({
    ok: true,
    name: "ResumeBuilder API",
    endpoints: ["/api/auth/*", "/api/resume/*"],
    ts: new Date().toISOString(),
  });
});


module.exports = app;
