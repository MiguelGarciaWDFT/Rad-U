//IMPORTACIONES
const mongoose = require("mongoose")


//SCHEMA
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    passwordEncriptado: String

})


//MODELO

const User = mongoose.model("User", userSchema)




//EXPORTACION

module.exports = User