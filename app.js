const express = require("express")
const indexRouter = require("./router/index.js")
require('dotenv').config()
const port = process.env.PORT || 3001;
var app = express()

app.set("views", "views")
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use("/", indexRouter)

app.listen(port,()=> {
    console.log("Server is running in this port "+ port);
})
