
const User = require("../models/user.model");



const createUser = async (req, res) => {
    try {
        const { name, lastName, phoneNumber, email, password } = req.body;
        const user = new User({ name, lastName, phoneNumber, email, password });
        await user.save();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastName, phoneNumber, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, { name, lastName, phoneNumber, email, password }, { new: true });
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};



module.exports = {createUser, getAllUsers, updateUser, deleteUser}

