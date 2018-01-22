
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          // id: 1,
          name: 'Beth',
          email: 'hello@bethjaw.com',
          password: 'capstones',
          avatar: '',
          // location_id: null
        },
        {
          // id: 2,
          name: 'Emma',
          email: 'emma@email.com',
          password: 'capstones',
          avatar: '',
          // location_id: 100,
        },
        {
          // id: 3,
          name: 'Anne',
          email: 'anne@email.com',
          password: 'capstones',
          avatar: '',
          // location_id: 200,
        },
        {
          // id: 4,
          name: 'Megan',
          email: 'megan@email.com',
          password: 'capstones',
          avatar: '',
          // location_id: 300,
        },
        {
          // id: 5,
          name: 'Margo',
          email: 'margo@email.com',
          password: 'capstones',
          avatar: '',
          // location_id: null,
        },
        {
          // id: 6,
          name: 'Ryan',
          email: 'ryan@email.com',
          password: 'capstones',
          avatar: '',
          // location_id: null,
        },
      ]);
    });
};
