const User = require("./../models/Users")
const bcryptjs = require("bcryptjs")

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

        //Reedireccion al usuario
        res.redirect("/auth/login")

    } catch (error) {

        res.status(500).render("auth/signup", {
            errorMessage: "Correo electrónico invalido, no usar espacios"
        })
    }
}

exports.viewLogin = async(req, res) => {
    res.render("auth/login")
}

exports.login = async(req, res) => {

    //Obtencion de datos del formulario

    const email = req.body.email
    const password = req.body.password

    try {

        //Validacion de usuario encontrado en base de datos

        const foundUser = await User.findOne({ email })

        if (!foundUser) {
            res.render("auth/login", {
                errorMessage: "Correo electrónico o contraseña sin coincidencias."
            })

            return
        }

        //Validacion de contraseña

        const verifiedPass = await bcryptjs.compareSync(password, foundUser.passwordEncriptado)

        if (!verifiedPass) {
            res.render("auth/login", {
                errorMessage: "Correo electrónico o contraseña sin coindicendias."
            })
            return

        }

        //Generar sesion
        req.session.currentUser = {
            _id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email,
            mensaje: "Sesion generada"

        }


        //Redireccionar al home
        res.redirect("/galeria")

    } catch (error) {
        console.log(error)
    }

}

exports.logout = async(req, res) => {

    req.session.destroy((error) => {
        if (error) {
            console.log(error);
            return
        }
    })

    res.redirect("/")
}