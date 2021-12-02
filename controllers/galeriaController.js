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

    console.log(newGaleriaCreated);

    res.redirect("/galeria")

    console.log("datos recibidos")
}

exports.viewEditGaleria = async(req, res) => {

    console.log(req.params)

    const galeriaID = req.params.galeriaID

    const foundGaleria = await Galeria.findById(galeriaID)

    res.render("galerias/edit", {
        data: foundGaleria
    })
}

exports.editGaleria = async(req, res) => {
    //obtener id del libro
    const galeriaID = req.params.galeriaID

    //cambios del formulario
    const name = req.body.name
    const description = req.body.description
    const interestingFacts = req.body.interestingFacts

    console.log(galeriaID)
    console.log(name, description, interestingFacts)

    //actualizacion en base de datos
    const updatedGaleria = await Galeria.findByIdAndUpdate(
        galeriaID, { name, description, interestingFacts }, { new: true }
    )
    console.log(updatedGaleria)

    res.redirect(`/galeria/${updatedGaleria._id}`)
}

exports.deleteGaleria = async(req, res) => {
    const galeriaID = req.params.galeriaID

    const deletedGaleria = await Galeria.findByIdAndDelete(galeriaID)
    console.log(deletedGaleria);

    res.redirect("/galeria")
}