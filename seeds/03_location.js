
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
          location_image: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/banff1.jpg',
        },
        {
          id: 200,
          location: 'Reykjavík',
          country: 'Iceland' ,
          type: 'City',
          user_id: 3,
          transportation: 'Definitely recommend renting a car and doing the driving yourself. Rent a 4 wheel drive car, but not necessarily the cool instagram worthy land rovers. Totally unnecessary and can be unsafe in different weather conditions.',
          location_image: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/iceland-planecrash.png'
        },
        {
          id: 300,
          location: 'Maui',
          country: 'Hawaii',
          type: 'City',
          user_id: 4,
          transportation: 'We rented a car',
          location_image: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/maui.png'
        },
      ]);
    });
};
