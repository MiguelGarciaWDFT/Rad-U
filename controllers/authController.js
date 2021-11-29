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

    //Validacion de contenido: username,password y correo

    if (!username || !email || !password) {
        res.render("auth/signup", {
            errorMessage: "Uno o más campos vacíos. Revísalos nuevamente."
        })

        return
    }

    //Validacion de password al menos 8 caracteres min 1 num y 1 mayuscula

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

    if (!regex.test(password)) {

        res.render("auth/signup", {
            errorMessage: "Tú contraseña debe contener 8 caracteres, mínimo un número y una mayúscula."
        })

        return
    }

    //Encriptacion del password
    try {
        const salt = await bcryptjs.genSalt(10)
        const passwordEncriptado = await bcryptjs.hash(password, salt)

        const newUser = await User.create({
            username,
            email,
            passwordEncriptado
        })

        //console.log(newUser)

        //Reedireccion al usuario
        res.redirect("/")

    } catch (error) {
        //console.log(error);

        res.status(500).render("auth/signup", {
            errorMessage: "Correo electrónico invalido, no usar espacios"
        })
    }
}