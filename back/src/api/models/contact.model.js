const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true },
    reason: { type: String, enum: ['question', 'information', 'alert'], required: true },
    message: { type: String, required: true },
    timeStamps: { type: Date, default: Date.now }
}, {
    collection: "contact"
});

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact;


