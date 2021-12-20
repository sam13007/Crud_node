const express = require("express")
const router = require("./routes/router")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(3000, () => {
    console.log("Listening to 3000")
})