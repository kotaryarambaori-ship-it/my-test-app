const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "SUCCESS! Frontend + Backend Connected 🚀"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
