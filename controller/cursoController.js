const { Op } = require("sequelize");
const Curso = require("../models/Curso");

async function abreadd(req, res) {
  res.render("add.ejs", {});
}

//alterar dados
async function add(req, res) {
  const { nome, email, senha } = req.body;
  const foto = req.file.filename;
  await Curso.create({ nome, email, senha, foto }).then((curso) => {
    res.redirect("/");
  });
}

async function abreedt(req, res) {
  let curso = await Curso.findByPk(req.params.id);
  res.render("edt.ejs", { curso: curso });
}

//alterar dados
async function edt(req, res) {
  let curso = await Curso.findByPk(req.params.id);
  curso.nome = req.body.nome;
  curso.email = req.body.email;
  curso.senha = req.body.senha;

  if (req.file.filename != "") {
    curso.foto = req.file.filename;
  }
  await curso.save();
  res.redirect("/");
}

async function list(req, res) {
  let cursos = await Curso.findAll();
  res.render("index.ejs", { Cursos: cursos });
}

//pode ter alteração
async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let cursos = await Curso.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("index.ejs", { Cursos: cursos });
}

async function del(req, res) {
  let curso = await Curso.findByPk(req.params.id);
  await curso.destroy();
  res.redirect("/");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
