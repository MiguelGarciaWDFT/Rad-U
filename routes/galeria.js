//importaciones
const express = require("express")
const router = express.Router()
const galeriaController = require("../controllers/galeriaController")

//ruteo con base url
//crear
router.get("/create", galeriaController.viewCreateGaleria)
router.post("/create", galeriaController.createGaleria)


//lectura de articulos en galeria
router.get("/", galeriaController.getAllGalerias)

//lectura / acceso a una galeria
router.get("/:galeriaID", galeriaController.getGaleria)

//editar galeria
router.get("/:galeriaID/edit", galeriaController.viewEditGaleria)
router.post("/:galeriaID/edit", galeriaController.editGaleria)

//exportacion
module.exports = router