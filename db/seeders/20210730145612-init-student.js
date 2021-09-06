'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('student', [{
      student_name: '孙悟空',
      student_age: 20,
      student_sex: 1
    },{
      student_name: '白骨精',
      student_age: 18,
      student_sex: 0
    },{
      student_name: '猪八戒',
      student_age: 16,
      student_sex: 1
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('student', null, {});
  }
};
