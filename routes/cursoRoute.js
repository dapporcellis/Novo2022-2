var express = require("express");
var router = express.Router();
const cursoController = require("../controller/cursoController");
const multer = require("../config/multer");

//listar todos os dados
router.get("/", cursoController.list);
//listar dados com filtro
router.post("/", cursoController.listfiltro);
//abre add
router.get("/add", cursoController.abreadd);
//adicionar dados no banco
router.post("/add", multer.single("logo"), cursoController.add);
//abrir editar
router.get("/edt/:id", cursoController.abreedt);
//editar dados no banco
router.post("/edt/:id", multer.single("logo"), cursoController.edt);
//deletar dados
router.get("/del/:id", cursoController.del);

module.exports = router;
