exports.up = function(knex, Promise) {
  return knex.schema.createTable("tours", table => {
    table.increments('id').primary();
    table.text('type');
    table.decimal('firstLatitude', 14, 10);
    table.decimal('firstLongitude', 14, 10);
    table.text('name');
    table.text('description');
    table.text('duration');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tours');
};
