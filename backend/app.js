require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// Debug every incoming request
app.use((req, _res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.url}`);
  next();
});

// Environment-aware CORS
const isProduction = process.env.NODE_ENV === "production";
const normalizeOrigin = (url) => (url ? url.replace(/\/$/, "") : "");
const allowedOrigin = isProduction
  ? normalizeOrigin(process.env.FRONTEND_URL)
  : "http://localhost:3000";

app.use(
  cors({
    origin: allowedOrigin || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Health root - always available
app.get("/", (req, res) => {
  res.json({
    ok: true,
    name: "ResumeBuilder API",
    endpoints: ["/api/auth/*", "/api/resume/*"],
    ts: new Date().toISOString(),
  });
});

// Connect Database on first API usage
let dbInitialized = false;
app.use(async (req, _res, next) => {
  if (!dbInitialized && req.path.startsWith("/api")) {
    try {
      await connectDB();
      dbInitialized = true;
    } catch (_err) {
      // Continue; individual route handlers will handle DB errors
    }
  }
  next();
});

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

module.exports = app;
