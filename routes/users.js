//importacion
const express = require("express")
const router = express.Router()

const usersController = require("./../controllers/usersController")

const routeGuard = require("./../middlewares/route-guard")

//ruteo

router.get("/profile", routeGuard.usuarioConectado, usersController.profile)

module.exports = router