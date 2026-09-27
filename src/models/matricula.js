'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Pessoa, {
        foreignKey: 'estudante_id'
      })

      Matricula.belongsTo(models.Curso, {
        foreignKey: 'cueso_id'
      })
    }
  }
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matricula',
  });
  return Matricula;
};