
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
        {
          // id: 5,
          tip: 'Don’t plan anything huge the first day',
          advice: 'Unless you’re really good at sleeping on a plane... We barely slept on the plane and since its only a 6-7 hour flight we landed in Iceland at 2am our time, but around 7am iceland time.',
          location_id: 200,
        },
        {
          // id: 6,
          tip: 'Layers are necessary.',
          advice: 'You can basically see all 4 seasons in one day in Iceland. They actually have a saying “if you don’t like the weather, just wait 5 minutes” (literally its on t-shirts and coffee mugs at the airport gift shop).',
          location_id: 200,
        },
        {
          // id: 7,
          tip: 'Credit card friendly!',
          advice: 'Never had a problem using a credit card like we did some places in Europe. It is a little bit more expensive that some other European cities though.',
          location_id: 200,
        },
        {
          // id: 8,
          tip: 'Tours are an option',
          advice: 'We did all of the trip ourself which was nice because we were on our own timeframe, but there are tons of tours you can take to make sure you see all iceland has to offer (which is a lot). There is a volcano, glacier, tons of waterfalls, northern lights and hot springs and so much beautiful landscape that you most likely won’t be able to see it all in one trip!',
          location_id: 200,
        },
      ]);
    });
};
