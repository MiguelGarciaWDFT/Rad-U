const express = require("express")
const router = express.Router()

const contentController = require("./../controllers/contentController")

router.get("/", contentController.content)

module.exports = router