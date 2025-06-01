require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);


const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB only once
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection failed:", err));

// ✅ Sample route
app.get("/", (req, res) => {
  res.send("Finance Web App Backend Running 🚀");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
