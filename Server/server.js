require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const app = express();

connectDB();

const cors = require("cors");

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://task-tracker-3-m04j.onrender.com"
  ]
}));

app.use(express.json());

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});