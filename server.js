import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});