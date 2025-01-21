const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require("cors");
const upload = require('./middleware/uploadMiddleware');
const User = require('./model/userModel');
const connectDB = require('./config/db');
require('dotenv').config()


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())


app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/api/users/", require("./routes/postRoute"))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB()