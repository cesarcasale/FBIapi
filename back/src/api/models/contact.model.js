const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    Name: { type: String},
    email: { type: String },
    reason: { type: String, enum: ['question', 'information', 'alert']},
    message: { type: String},
    timeStamps: { type: Date, default: Date.now }
}, {
    collection: "contact"
});

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact;


