exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments('id').primary();
    table.text('email');
    table.text('userName');
    table.text('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
