//levantar base de datos
const mongoose = require("mongoose")


const connectDB = async() => {
    console.log("hola");
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Base de datos conectada");
}

module.exports = connectDB