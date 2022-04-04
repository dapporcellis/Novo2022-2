const { Model, DataTypes } = require("sequelize");

class Curso extends Model {
  static init(conexao) {
    super.init(
      {
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        cargahoraria: DataTypes.STRING,
        logo: DataTypes.STRING,
        datainicio: DataTypes.DATE,
      },
      { sequelize: conexao, freezeTableName: true, tableName: "cursos" }
    );
  }
}

module.exports = Curso;
