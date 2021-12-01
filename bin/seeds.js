//importaciones
const mongoose = require("mongoose")
const Galeria = require("./../models/Galeria")

require("dotenv").config()

console.log(Galeria);
//conexion a base de datos
mongoose.connect("mongodb+srv://MiguelGarcia:tynQDFm9oIeZ2wxv@cluster0.1dm2e.mongodb.net/Rad-U", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//datos que queremos poblar
const galeria = [{
        imageUrl: "url de imagen",
        name: "Radiologia",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Radiografia",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Tomografia",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Resonancia Magnetica",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Ultrasonido",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Mastografia",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Medicina Nuclear",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Radioterapia",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Esudios Especiales",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    },
    {
        imageUrl: "url de imagen",
        name: "Factores de riesgo",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        photoUrl: "url de foto"
    }

]

//poblar base de datos

const createGalerias = async() => {
    const newGalerias = await Galeria.create(galeria)
    console.log(newGalerias);
    mongoose.connection.close()
}

createGalerias()