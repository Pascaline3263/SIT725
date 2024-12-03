const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "../client"))); // Serve static files from the 'client' folder

// Serve index.html when accessing the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

// Mock data for charging stations
const stations = [
  { name: "Station A", address: "123 Main St" },
  { name: "Station B", address: "456 Oak Rd" },
  { name: "Station C", address: "789 Pine Ave" },
];

// API endpoint to search for charging stations
app.get("/api/stations", (req, res) => {
  const { location } = req.query;
  
  // Return stations regardless of the location for simplicity
  if (location) {
    res.status(200).json({ stations });
  } else {
    res.status(400).json({ message: "Location is required!" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
