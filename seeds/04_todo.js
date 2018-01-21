
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
        {
          // id: 6,
          title: 'Vík',
          details: 'Vík is located in southern Iceland and is highly recommended. Its about 2 1/2 hours from Reykjavik and definitely worth the drive. The drive alone is beautiful and the picturesque landscape is alone a good reason to visit. Houses are extremely spread out and the landscape is gorgeous with moss fields, wild horses, waterfalls. The black sand beaches are one of the highlights of this area. There is also church and basalt rocks (Reynisdrangar) heading into the ocean. It is all just beautiful.',
          location_id: 200,
        },
        {
          // id: 7,
          title: 'Skogafoss',
          details: 'This is a must while in Vík! It is a giant waterfall and you can see it from the road on your way into town. Although you might run into some other people visiting it is not crowded and you can easily get amazing photos and enjoy your own experience without feeling overcrowded. You can walk right up to the waterfall if you wanted. There are no touristy things like a fee or lines, just a beautiful waterfall on the side of the road.',
          location_id: 200,
        },
        {
          // id: 8,
          title: 'Sólheimasandur Plane Crash',
          details: 'This plane crash was one of the highlights of our trip! It is a plane that crashed on the beach and has been left there. There are no signs directing you to the plane - I had to look up directions on how to find it on the internet and they are based off of gates and other visual cues which makes it even more fun to search for. You can drive onto the beach until you find it and park right there. Its out of the way and can’t be seen from the road so most likely there will not be tons of people there. There might have been two other groups when we initially went. The next morning we were up early so decided to make another stop there since we had some extra time. It was amazing. There was no one there and we were able to get some amazing pictures.',
          location_id: 200,
        },
        {
          // id: 9,
          title: 'Dyrhólaey lighthouse',
          details: 'Another cool stop. Again, it gives another perspective of the beautiful landscape and definitely worth the drive up the hill to check it out.',
          location_id: 200,
        },
        {
          // id: 10,
          title: 'Reykjavik ',
          details: 'The largest city in iceland. Close to the airport so a great place to stay before flying out. Great to walk around. Still feels small. Lots of resturants and shopping. We ate a small pizza place and it was great.',
          location_id: 200,
        },
        {
          // id: 11,
          title: 'Blue Lagoon',
          details: 'Definitely worth going to see, but I wouldn’t plan on spending a ton of time here.',
          location_id: 200,
        },
      ]);
    });
};
