exports.up = function(knex, Promise) {
  return knex.schema.createTable("tours", table => {
    table.increments('id').primary();
    table.text('type');
    table.integer('firstLatitude');
    table.integer('firstLongitude');
    table.text('name');
    table.text('description');
    table.text('duration');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tours');
};
