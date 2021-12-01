//importacion
const mongoose = require("mongoose")

//schema
const galeriaSchema = mongoose.Schema({
    imageUrl: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    interestingFacts: {
        type: String
    },
    photoUrl: {
        type: String
    }
}, {
    timestamps: true
})

//modelo

const Galeria = mongoose.model("Galeria", galeriaSchema)

//expotacion
module.exports = Galeria