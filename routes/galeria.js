//importaciones
const express = require("express")
const router = express.Router()
const galeriaController = require("../controllers/galeriaController")

//ruteo con base url

//lectura de articulos creados en galeria
router.get("/", galeriaController.getAllGalerias, )

//exportacion
module.exports = router