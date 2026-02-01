const express = require("express");
const path = require("path");

const app = express();
const port = 10000;

// Serve frontend static files
const staticDir = path.join(__dirname, "../frontend");
app.use(express.static(staticDir));

// Simple API route
app.get("/api/message", (req, res) => {
  res.send("Hello from Backend API 🎯");
});

// Fallback to index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});