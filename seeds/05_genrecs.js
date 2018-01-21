
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genrecs').del()
    .then(function () {
      // Inserts seed entries
      return knex('genrecs').insert([
        {
          // id: 1,
          tip: 'Western Canada (BANFF & Jasper) is the place to go in the summer...',
          advice: 'It is full of selfie-stick tour bus tourists in certain places, but also has the amazing remote locations you feel you\'ve lone discovered.',
          location_id: 100,
        },
        {
          // id: 2,
          tip: 'Go to places early or late. ',
          advice: 'We went to Lake Louise in the afternoon and it was packed, and honestly disappointing. However we got up early the next morning and were the 1st ones there. Saw the mist off the lake, quiet and BEAUTIFUL!',
          location_id: 100,
        },
        {
          // id: 3,
          tip: 'Carry Bear Spray',
          advice: 'Bears were everywhere and super active. We picked up spray once we arrived because we couldn\'t carry it over the border.',
          location_id: 100,
        },
        {
          // id: 4,
          tip: 'Use the park rangers and their info',
          advice: 'They are the BEST. We got so much information on good hikes that wouldn\'t be crowded, or if we wanted a long or short hike they were there to help!',
          location_id: 100,
        },
      ]);
    });
};
