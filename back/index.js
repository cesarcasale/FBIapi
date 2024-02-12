
const express = require('express');
const routeUser = require("./src/api/routes/user.routes")
const routeContact = require("./src/api/routes/contact.routes")

const app = express();
app.use(express.json());


app.use("/user", routeUser)
app.use("/contact", routeContact)


const PORT = 5051;
app.listen(PORT, ()=>{
    console.log('escuchando por el puerto ' + PORT);
})