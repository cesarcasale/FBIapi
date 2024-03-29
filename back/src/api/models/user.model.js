const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, require:true},
    lastName: {type: String, require:true},
    phoneNumber: {type: String, require:true},
    email: {type: String, require:true},
    password: {type: String, require:true},
    timeStamps: {type: String, require:true},
},{
    collection: "user"
});

const User = mongoose.model("user", userSchema)
module.exports = User;
