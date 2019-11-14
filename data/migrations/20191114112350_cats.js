
exports.up = function(knex) {
  return knex.schema.createTable('cats', tbl => {
       tbl.increments()
       tbl.string('name', 128).notNullable()
       tbl.string('color', 128).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cats');
};
