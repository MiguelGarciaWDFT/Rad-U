//IMPORTACIONES
const mongoose = require("mongoose")


//SCHEMA
const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: [true, "Correo electrónico requerido."],
        match: [/^\S+@\S+\.\S+$/, "Ingresa un correo electrónico válido."],
        unique: true,
        lowercase: true,
        trim: true
    },
    passwordEncriptado: String


})


//MODELO

const User = mongoose.model("User", userSchema)




//EXPORTACION

module.exports = User