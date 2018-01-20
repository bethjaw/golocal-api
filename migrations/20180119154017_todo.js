
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('todo', (table) => {
      table.increments()
      table.string('title')
      table.text('details')
      table.integer('location_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('todo')
  ])
};
