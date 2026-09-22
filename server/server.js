const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "ZeroTrustX API is running"
    });
});

app.listen(PORT, () => {
    console.log(`ZeroTrustX server running on http://localhost:${PORT}`);
});