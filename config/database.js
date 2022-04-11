const sequelize = require("sequelize");

const dbconfig = require("./dbconfig");

const conexao = new sequelize(dbconfig);

const Usuario = require("../models/Usuario");
const Curso = require("../models/Curso");

Usuario.init(conexao);
Curso.init(conexao);

module.exports = conexao;
