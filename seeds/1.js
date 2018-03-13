exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1,
          email: 'kmkingdon@gmail.com',
          userName: 'kmkingdon',
          password: '1234'
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1;")
    });
};
