
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
          user_id: 2,
          transportation: 'We rented an RV in Calgary to drive around and camp the National Park!',
          location_image: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/canada.png',
        },
        {
          id: 200,
          location: 'Reykjavík',
          country: 'Iceland' ,
          user_id: 3,
          transportation: 'Definitely recommend renting a car and doing the driving yourself. Rent a 4 wheel drive car, but not necessarily the cool instagram worthy land rovers. Totally unnecessary and can be unsafe in different weather conditions.',
          location_image: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/iceland-planecrash.png',
        },
        {
          id: 300,
          location: 'Maui',
          country: 'Hawaii',
          user_id: 4,
          transportation: 'We rented a car',
          location_image: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/maui.png',
        },
        {
          id: 400,
          location: 'Dublin',
          country: 'Ireland',
          user_id: 4,
          transportation: 'We took a bus tour of southern and western Ireland through CIE Tours and it was fabulous. I was definitely one of the youngest people on the bus but it was a great way to travel the country, especially as a first timer to Europe.',
          location_image: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/ireland1.png',
        },
        {
          id: 500,
          location: 'General',
          country: 'Italy!',
          user_id: 5,
          transportation: 'Driving yourself or a tour are both good options depending on what you want to do',
          location_image: 'https://s3.us-east-2.amazonaws.com/golocal-capstone/Portofino+Italy.png',
        },
      ]);
    });
};
