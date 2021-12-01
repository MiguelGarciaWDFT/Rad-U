const Galeria = require("./../models/Galeria")


exports.getAllGalerias = async(req, res) => {
    const allGalerias = await Galeria.find({})
        //console.log(allGalerias);
    res.render("galerias/list", {
        data: allGalerias
    })
}