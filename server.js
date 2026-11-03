const express = require("express");

const app = express();

app.use(express.json());

app.post("/api/students", (req, res) => {
    const { id, name, email, course, age } = req.body;

    if (!id || !name || !email || !course || !age) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const student = {
        id,
        name,
        email,
        course,
        age
    };

    res.status(201).json({
        message: "Student created successfully",
        student: student
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});