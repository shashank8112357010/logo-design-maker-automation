const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.DB_URL;
const userRoute = require("./routes/userRoutes.js");

const PORT = process.env.PORT || 3000;

// Initialize the express app: 
const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/dashboard", userRoute);

const server = app.listen(PORT, console.log(`Server is running on port ${PORT}`));

// CONNECTING MONGODB:
mongoose.connect(MONGODB_URL).then(() => {
    console.log("DATABASE CONNECTED!!")
}).catch((err) => console.log(err));

