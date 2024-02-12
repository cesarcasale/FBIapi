

const mongoose = require("mongoose")


const url = "mongodb+srv:// @cluster0.wshtjkz.mongodb.net/  ?retryWrites=true&w=majority";
 

const connectDb = async ()=>{
    try {
        const db = await mongoose.connect(url, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        const {name, host} = db.connection;
        console.log(`Nombre de la BBDD: ${name} host: ${host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDb }