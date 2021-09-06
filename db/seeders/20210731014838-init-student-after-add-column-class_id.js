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
      student_sex: 1,
      class_id: 1
    }, {
      student_name: '白骨精',
      student_age: 18,
      student_sex: 0,
      class_id: 1
    }, {
      student_name: '猪八戒',
      student_age: 16,
      student_sex: 1,
      class_id: 2
    }, {
      student_name: '唐僧',
      student_age: 22,
      student_sex: 1,
      class_id: 1
    }, {
      student_name: '沙和尚',
      student_age: 25,
      student_sex: 1,
      class_id: 1
    }, {
      student_name: '红孩儿',
      student_age: 13,
      student_sex: 1,
      class_id: 2
    }, {
      student_name: '黑熊怪',
      student_age: 26,
      student_sex: 1,
      class_id: 2
    }, {
      student_name: '太白金星',
      student_age: 66,
      student_sex: 1,
      class_id: 3
    }, {
      student_name: '嫦娥',
      student_age: 18,
      student_sex: 0,
      class_id: 3
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
