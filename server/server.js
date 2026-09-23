require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/database");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "ZeroTrustX API is running"
    });
});

app.listen(PORT, () => {
    console.log(`ZeroTrustX server running on http://localhost:${PORT}`);
});