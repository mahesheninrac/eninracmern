const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const { getAllusers, addUser, getuserById } = require('../controllers/userController');

const route = express.Router()

route.post("/adduser", upload.single("photo"), addUser);
route.get("/", getAllusers);
route.get("/:id", getuserById)

module.exports = route;