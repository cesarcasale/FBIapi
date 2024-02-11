//5to importamos modelo de datos

const User = require("../models/user.model");

const newUser = async(req, res) => {
    try {
        const body = req.body;
        const user = new User(body);
      //  const createdUser = await user.save();
        return res.json(user)
    } catch (error) {
        return res.json(error)
    }
}


module.exports = {newUser}

