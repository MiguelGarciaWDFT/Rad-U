//importacion
const express = require("express")
const router = express.Router()

const usersController = require("./../controllers/usersController")

const routeGuard = require("./../middlewares/route-guard")

console.log("el routeguard importado es:", routeGuard.usuarioConectado);
//ruteo

router.get("/profile", routeGuard.usuarioConectado, usersController.profile)

module.exports = router