var mongoose = require('mongoose');
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage().then( async() => {
    try {
        const db = await mongoose.connect('mongodb://testing/')
        const {name, host} = db.connection;
        console.log(`Nombre de la BBDD: ${name} host: ${host}`)
    } catch (error) {
        console.log(error)
    }
});

const connectDb = async ()=>{
    

}

module.exports = { connectDb }