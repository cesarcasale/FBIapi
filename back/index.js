//1er paso config base servidor

const express = require('express');
// exportamos de database
//const {connectDb} = require("./src/utils/database");
const routeUser = require("./src/api/routes/user.routes")
const routeContact = require("./src/api/routes/contact.routes")

const app = express();
app.use(express.json());

//connectDb()

app.use("/user", routeUser)
app.use("/contact", routeContact)


const PORT = 5051;
app.listen(PORT, ()=>{
    console.log('escuchando por el puerto ' + PORT);
})