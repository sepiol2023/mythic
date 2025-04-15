import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/ping", (req, res) => {
  res.json({ message: "🏰 The Mythic backend is alive and roaring!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mythic server running on port ${PORT}`);
});
