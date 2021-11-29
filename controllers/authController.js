const User = require("./../models/Users")
const bcryptjs = require("bcryptjs")
const async = require("hbs/lib/async")


exports.viewRegister = (req, res) => {
    res.render("auth/signup")
}


exports.register = async(req, res) => {

    //Obtencion de datos del formulario
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    //Encriptacion del password
    const salt = await bcryptjs.genSalt(10)
    const passwordEncriptado = await bcryptjs.hash(password, salt)

    const newUser = await User.create({
        username,
        email,
        passwordEncriptado
    })

    console.log(newUser)

    //Reedireccion al usuario
    res.redirect("/")


}