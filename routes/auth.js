const express = require("express")
const router = express.Router()

const authController = require("./../controllers/authController")

const routeGuard = require("./../middlewares/route-guard")





//crear usuario y mostrar formulario, mostrara un vista
router.get("/signup", routeGuard.usuarioNoconectado, authController.viewRegister)

//enviar datos a la bd que vienen del formulario, 
//sera el proceso del formulario
router.post("/signup", routeGuard.usuarioNoconectado, authController.register)

//Inicio de sesion
//Mostrar formulario
router.get("/login", routeGuard.usuarioNoconectado, authController.viewLogin)

//Manejo del formulario
router.post("/login", routeGuard.usuarioNoconectado, authController.login)

//Cerrar sesion
router.post("/logout", routeGuard.usuarioConectado, authController.logout)


module.exports = router