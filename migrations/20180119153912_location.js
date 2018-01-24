
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('location', (table) => {
      table.increments()
      table.string('location')
      table.string('country')
      table.integer('user_id')
      table.string('transportation')
      table.text('location_image')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('location')
  ])
};
