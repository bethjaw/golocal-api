
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
        {
          // id: 9,
          tip: 'LahainaLuna Cafe',
          advice: 'Really good for dinner!  It’s a food stand and on the cheaper side.',
          location_id: 300,
        },
        {
          // id: 10,
          tip: 'We stayed at The Royal Lahaina Resort, which is at Kaanapali Beach',
          advice: 'It was a great location, 5-10 minutes from Lahaina which has all the restaurants and shops. It was also more affordable than other resorts.  It didn’t have as fancy of a pool as some of the other resorts but it didn’t matter to us because the beach was fantastic.  We spent our time on the beach rather than the pool.  The resort also does not have a daily fee like some of the others.  Some resorts have a fee of $30 a day.  It was nice not to have to pay the fee as some days we were out exploring and were not at the resort much.  We were able to rent an umbrella a couple days and it was nice to give you some shade when you are just laying on the beach.  There were also other water activities that you could rent- paddleboards, kayaks, and snorkel gear.  The resort has a little convenience store too.',
          location_id: 300,
        },
        {
          // id: 11,
          tip: 'If you have random time to kill...',
          advice: 'drive to the north end of the island and see the cliffs and the blowhole.  It’s a one lane road!',
          location_id: 300,
        },
        {
          // id: 12,
          tip: 'Shaved ice with coconut ice cream',
          advice: 'Get it! There are a few places in Lahaina.',
          location_id: 300,
        },
        {
          // id: 13,
          tip: 'Travel around the country',
          advice: 'If you decide to take a trip to Ireland I would definitely recommend traveling around the country.  I think visiting the towns and seeing the landscape is the best part of traveling to Ireland. Since we did a tour bus, I did not have to worry about anything.  The bus driver was entertaining and told many stories about the country and history that you wouldn’t get driving around by yourself.  One benefit of driving yourself though is you can stay in certain cities or places for however long you like and then see as much or as little of the history (there are many churches and castles to see in each city), etc as you want. Most of my meals were organized by the tour, either at the hotels we stayed at or at special dinners with entertainment.  Therefore, I didn’t get to go out to pick my own restaurants much. However, when I did everything was delicious.  It’s easy to find a pub that serves great fish and chips!',
          location_id: 400,
        },
        {
          // id: 14,
          tip: 'Try the cheesecake...',
          advice: 'I had cheesecake multiple times on the trip and each time it was the best cheesecake I’ve ever had! J.J O’Malleys In Westport was one of my favorite meals and you should definitely try the cheesecake here!!',
          location_id: 400,
        },
      ]);
    });
};
