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
        imageUrl: "https://www.imagenradiologica.com/imagenes/g/1550607127-14273-VOkDf-39035-1eDUL-mastografa2jpg.jpg",
        name: "Mastografia",
        description: "Es el estudio radiologico más importante para la detección temprana del cáncer de mama, es realizado principalmante por un técnico radiólogo el cual utiliza un equipo especial llamado mastógrafo cuya principal función es la compresión de las glándulas mamarias, todo esto para lograr una mayor visualización del tejido mamario y consta de 4 proyecciones básicas, 2 conocidas como craneocaudales y 2 oblicuas pero pueden ser más segun el caso, si se detecta alguna anomalia en la imagen como quistes `bolitas`entonces se toman proyecciones extra para visualizar mejor el tipo de lesión y llegar a un diagnóstico certero.",
        interestingFacts: "1.-Dato curioso... sobre implantes mamarios, estos pueden cubrir lesiones del tejido y debido a esto se toman hasta 8 o más proyecciones ya que el implante debe moverse. 2.- Dato curioso... generalmente al ser un estudio invasivo es doloroso pero hay pacientes a quienes no les produce tanto dolor. 3.- Dato curioso... no todas las lesiones se ven iguales por eso es importante las revisiones periodicas. 4.- Dato curioso... el estudio no es recomendable para las pacientes menores de 20 años por la densidad de la mama, es decir hay mas tejido graso acumulado y la edad ideal del chequeo es a los 40 años en adelante, con exepción de casos especiales.",
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