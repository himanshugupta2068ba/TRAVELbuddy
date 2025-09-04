const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // 👈 allows frontend requests
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from backend 🚀" });
});

app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});