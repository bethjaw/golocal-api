
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('connection', (table) => {
      table.increments()
      table.integer('user_id_1')
      table.integer('user_id_2')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('connection')
  ])
};
