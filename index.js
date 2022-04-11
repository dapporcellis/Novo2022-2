var express = require("express");
var app = express();

const usuarioRoute = require("./routes/usuarioRoute");
const cursoRoute = require("./routes/cursoRoute");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

require("./config/database.js");

app.use("/usuario", usuarioRoute);
app.use("/curso", cursoRoute);

app.listen("3000", function () {
  console.log("Conexão iniciada na porta 3000");
});
