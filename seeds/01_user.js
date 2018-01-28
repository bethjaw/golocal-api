
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
          avatar: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/bethjaw.jpg',
        },
        {
          // id: 2,
          name: 'Emma',
          email: 'emma@email.com',
          password: 'capstones',
          avatar: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/erhaley.png',
        },
        {
          // id: 3,
          name: 'Anne',
          email: 'anne@email.com',
          password: 'capstones',
          avatar: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/anne-insta.jpg',
        },
        {
          // id: 4,
          name: 'Megan',
          email: 'megan@email.com',
          password: 'capstones',
          avatar: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/megjaws.png',
        },
        {
          // id: 5,
          name: 'Ashley',
          email: 'ashley@email.com',
          password: 'capstones',
          avatar: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/ashley.png',
        },
        {
          // id: 6,
          name: 'Ryan',
          email: 'ryan@email.com',
          password: 'capstones',
          avatar: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/ryan.png',
        },
      ]);
    });
};
