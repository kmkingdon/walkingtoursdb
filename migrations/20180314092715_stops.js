exports.up = function(knex, Promise) {
  return knex.schema.createTable("stops", table => {
    table.increments('id').primary();
    table.integer('stopNumber');
    table.decimal('latitude', 14, 10)
    table.decimal('longitude', 14, 10)
    table.text('name');
    table.text('address');
    table.text('link');
    table.text('description');
    table.boolean('lastStop');
    table.integer('tours_id').references('tours.id').onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stops');
};
