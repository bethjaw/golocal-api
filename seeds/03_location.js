
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {
          id: 100,
          location: 'Banff',
          country: 'Canada',
          type: 'National Park',
          user_id: 2,
          transportation: 'We rented an RV in Calgary!',
        },
        {
          id: 200,
          location: 'Reykjavík',
          country: 'Iceland' ,
          type: 'City',
          user_id: 3,
          transportation: 'Used public transportation',
        },
        {
          id: 300,
          location: 'Maui',
          country: 'Hawaii',
          type: 'City',
          user_id: 4,
          transportation: 'We rented a car',
        },
      ]);
    });
};
