'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class _class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      _class.hasMany(models.student)
    }
  };
  _class.init({
    class_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: '_class',
    timestamps: false,
    freezeTableName: true,
    underscored: true
  });
  return _class;
};
