
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('bucketlist', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('location_id')
      table.string('location_location')
      table.string('location_country')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('bucketlist')
  ])
};
