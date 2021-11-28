//Importaciones
const express = require("express")
const app = express()

const hbs = require("hbs")

const connectDB = require("./config/db")

require("dotenv").config()

//Middlewares
app.use(express.static("public"))

app.set("views", __dirname + "views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

app.use(express.urlencoded({ extended: true }))

connectDB()

//Rutas
app.use("/content", require("./routes/content"))
app.use("/users", require("./routes/users"))
app.use("/", require("./routes/index"))


//Servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado en puerto: ${process.env.PORT}`)
})