exports.up = function(knex, Promise) {
  return knex.schema.createTable("stops", table => {
    table.increments('id').primary();
    table.integer('stopNumber');
    table.float('latitude');
    table.float('longitude');
    table.text('name');
    table.text('address');
    table.text('link');
    table.text('description');
    table.integer('tours_id').references('tours.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stops');
};
