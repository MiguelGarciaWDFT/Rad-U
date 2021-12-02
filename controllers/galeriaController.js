const Galeria = require("./../models/Galeria")


exports.getAllGalerias = async(req, res) => {
    const allGalerias = await Galeria.find({})
        //console.log(allGalerias);
    res.render("galerias/list", {
        data: allGalerias
    })
}

exports.getGaleria = async(req, res) => {

    const singleGaleriaID = req.params.galeriaID

    const getLaGaleria = await Galeria.findById(singleGaleriaID)

    console.log(getLaGaleria)

    res.render("galerias/single", {
        data: getLaGaleria
    })
}

exports.viewCreateGaleria = async(req, res) => {
    res.render("galerias/create")
}

exports.createGaleria = async(req, res) => {
    console.log(req.body)
    const imageUrl = req.body.imageUrl
    const name = req.body.name
    const description = req.body.description
    const interestingFacts = req.body.interestingFacts

    const newGaleriaCreated = await Galeria.create({ name, description, interestingFacts, imageUrl })

    res.redirect("/galeria")

    console.log("datos recibidos")
}