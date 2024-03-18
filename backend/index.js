import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error: ", error.message);
    });

const app = express();
const port = process.env.PORT || 4000;

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
