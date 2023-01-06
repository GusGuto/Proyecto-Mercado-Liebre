const express = require("express");
const path = require("path");

const app = express();

//const publicPath = path.resolve(__dirname, "./PUBLIC");

app.use(express.static(path.resolve("./PUBLIC")));


// 

const port= process.env.PORT || 3001;

app.listen(port, () => console.log("Servidor corriendo en el puerto $ {port}"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./VIEWS/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./VIEWS/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./VIEWS/login.html"))
});