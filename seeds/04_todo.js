
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {
          // id: 1,
          title: 'The Iceline Trail (YOHO National Park Hike)',
          details: 'We were basically alone on this trail. It started in the woods and went up to rocky, lake filled mountain top with awesome views! Probably around 11 miles total, so we packed lunch and ate along the way. This was my favorite part of the trip!',
          location_id: 100,
        },
        {
          // id: 2,
          title: 'Johnston Canyon Hike',
          details: 'This was also really cool. A little more crowded, but you can see some clear hot spring pools. Kinda of a nice half day hike that you can make into whatever you want!',
          location_id: 100,
        },
        {
          // id: 3,
          title: 'Pyramid, Moraine and Malgine Lakes',
          details: 'Pyramid Has the most perfect views each morning! Great place to go to relax!  Moraine is close to Lake Louise and not as crowded (yay!) - It was worth seeing for me! Malgine is also very beautiful. We did some trail running here!',
          location_id: 100,
        },
        {
          // id: 4,
          title: 'Emerald Lake & Natural Bridge',
          details: 'We did this while passing through, cool to see but not the best when comparing to everything else.',
          location_id: 100,
        },
        {
          // id: 5,
          title: 'Wine Country, BC',
          details: 'This was a game changer for us!! We had no idea BC was wine country to the max. There are some AMAZING small winery\'s that all do samplings and tastings. If you love wine, this is definitely something you should add to the trip. (It was so beautiful too!)',
          location_id: 100,
        },
      ]);
    });
};
