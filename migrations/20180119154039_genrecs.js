
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('genrecs', (table) => {
      table.increments()
      table.text('tip')
      table.text('advice')
      table.integer('location_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('genrecs')
  ])
};
