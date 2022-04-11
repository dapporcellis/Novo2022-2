const { Op } = require("sequelize");
const Curso = require("../models/Curso");

async function abreadd(req, res) {
  res.render("curso/add.ejs", {});
}

//alterar dados
async function add(req, res) {
  const { titulo, descricao, cargahoraria, datainicio } = req.body;
  const logo = req.file.filename;
  await Curso.create({
    titulo,
    descricao,
    cargahoraria,
    datainicio,
    logo,
  }).then((curso) => {
    res.redirect("/curso");
  });
}

async function abreedt(req, res) {
  let curso = await Curso.findByPk(req.params.id);
  res.render("curso/edt.ejs", { curso: curso });
}

//alterar dados
async function edt(req, res) {
  let curso = await Curso.findByPk(req.params.id);
  curso.titulo = req.body.titulo;
  curso.descricao = req.body.descricao;
  curso.cargahoraria = req.body.cargahoraria;
  curso.datainicio = req.body.datainicio;

  if (req.file.filename != "") {
    curso.logo = req.file.filename;
  }
  await curso.save();
  res.redirect("/curso");
}

async function list(req, res) {
  let cursos = await Curso.findAll();
  res.render("curso/index.ejs", { Cursos: cursos });
}

//pode ter alteração
async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let cursos = await Curso.findAll({
    where: { titulo: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("curso/index.ejs", { Cursos: cursos });
}

async function del(req, res) {
  let curso = await Curso.findByPk(req.params.id);
  await curso.destroy();
  res.redirect("/curso");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
