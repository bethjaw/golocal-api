
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('connection').del()
    .then(function () {
      // Inserts seed entries
      return knex('connection').insert([
        {
          // id: 1,
          user_id_1: 1,
          user_id_2: 2,
        },
        {
          // id: 2,
          user_id_1: 1,
          user_id_2: 3,
        },
        {
          // id: 3,
          user_id_1: 1,
          user_id_2: 4,
        },
        {
          // id: 4,
          user_id_1: 1,
          user_id_2: 5,
        },
        {
          // id: 5,
          user_id_1: 1,
          user_id_2: 6,
        },
      ]);
    });
};
