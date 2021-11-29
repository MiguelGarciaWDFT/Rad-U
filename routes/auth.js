const express = require("express")
const router = express.Router()

const authController = require("./../controllers/authController")

//crear usuario y mostrar formulario, mostrara un vista
router.get("/signup", authController.viewRegister)

//enviar datos a la bd que vienen del formulario, 
//sera el proceso del formulario
router.post("/signup", authController.register)

//Inicio de sesion
//Mostrar formulario
router.get("/login", authController.viewLogin)

//Manejo del formulario
router.post("/login", authController.login)


module.exports = router