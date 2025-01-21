const User = require("../model/userModel");


const getAllusers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const cover = req.file.filename;
        const fullUrl = cover;

        const usr = await User.create({
            name, email, photo: fullUrl
        })

        res.status(201).json(usr);
    } catch (error) {
        console.log(error)
    }
}

const getuserById = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) return res.status(404).send("User not found")
    res.json(user)
}

module.exports = {
    addUser, getAllusers,
    getuserById
}