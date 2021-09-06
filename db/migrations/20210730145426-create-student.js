'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('student', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_name: {
        type: Sequelize.STRING(10),
        allowNull:false
      },
      student_age: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      student_sex: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('student');
  }
};
