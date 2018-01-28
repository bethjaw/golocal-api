
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bucketlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('bucketlist').insert([
        {
          // id: 1, 
          user_id: 1,
          location_id: 100
        },
      ]);
    });
};
