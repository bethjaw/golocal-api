
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
        {
          // id: 12,
          title: 'Road to Hana',
          details: 'Take the Road to Hana and download the Shaka Guide app.  It’s like $6 but it’s so worth it.  It tells you all the stops to make and the ones to skip.  Highly recommend going to the black sand and red sand beaches, and the coconut glen ice cream stand. Banana bread stands also have great banana bread.  You must have cash for everything on the road to Hana.',
          location_id: 300,
        },
        {
          // id: 13,
          title: 'Paia Fish Market in Lahaina',
          details: 'My favorite place to eat! It’s a casual place, the grilled mahi mahi was amazing.  They have other fish options as well as other foods.',
          location_id: 300,
        },
        {
          // id: 14,
          title: 'Kimo’s',
          details: 'Did a fancier dinner here. It has a great atmosphere and good food. We were able to sit on the deck right next to the water and watch the sunset.  There was also live music!',
          location_id: 300,
        },
        {
          // id: 15,
          title: 'Hiking',
          details: 'Maui also has some great hiking.  We did the Waihee Ridge Trail, which was a moderate hike, it got a bit challenging towards the top.  Easy to get to.',
          location_id: 300,
        },
        {
          // id: 16,
          title: 'Snorkeling with Maui Ocean Sports',
          details: 'Snorkeling was great! The snorkel place was right in Lahaina. It may not have been the best place to snorkel on the island, there are a few locations that you can go to, and the area we snorkeled some of the coral was dying.  However, wherever you snorkel will be cool- just to get in the water and see the sea turtles is amazing!  Also there are many other companies to choose from.  We really like Maui Ocean Sports as we signed up for a group tour but ended up being the only two on the tour.  They also have other tours for other parts of the island.  There was some stronger winds when we were there which made us choose a location to snorkel that we felt was not going to be affected by the wind as much.  Sometimes the wind would cause a tour to be canceled.',
          location_id: 300,
        },
        {
          // id: 17,
          title: 'The Plantation Course at Kapalua',
          details: 'If you are a golfer, The Plantation Course at Kapalua, is worth going to.  It has fantastic views!',
          location_id: 300,
        },
        {
          // id: 18,
          title: 'Dublin',
          details: 'Our trip started and ended in Dublin.  I wasn’t able to be in Dublin long but I would recommend visiting the Guinness Brewery.  Who wouldn’t want to have the freshest Guinness you can get while in Ireland?  There’s also great views of the city from the bar.  The last night of our trip, after we got back from traveling the countryside, we had dinner at The Brazen Head with entertainment.  The entertainment was called “An Evening of Food, Folklore, and Fairies”.  This was definitely a tourist thing but, if you are looking for music and storytelling I would recommend it.  I loved hearing the folklore and stories from the people who grew up and live in Ireland!',
          location_id: 400,
        },
        {
          // id: 19,
          title: 'Kilkenny',
          details: 'This was a fun town to stop in.  There are great pubs to listen to Irish music.  As with most of the cities you can just walk around the streets at night and find a pub by listening for the music!',
          location_id: 400,
        },
        {
          // id: 20,
          title: 'Waterford',
          details: 'This is a great stop if you want to see the Waterford factory.  I only spent a couple hours there but it is beautiful since it is on a river.  The Waterford factory is very interesting and you can see the making of the crystal.',
          location_id: 400,
        },
        {
          // id: 21,
          title: 'Blarney Castle',
          details: 'Blarney Castle is located in a huge park and the grounds are beautiful.  There will probably be a long line to “kiss the Blarney Stone”.  They also have Woollen Mills for shopping. We spent a few hours there on our way to Killarney so it could be a quick stop but there are other cool things to see if you skip it.',
          location_id: 400,
        },
        {
          // id: 22,
          title: 'Killarney',
          details: 'We were here for a couple days since it is near the Ring of Kerry and Dingle Peninsula.  This is a great place to stay!  Apparently the Irish like to vacation here in the summer.  It has great city life, pubs, shops, music etc. so a good city to walk around and explore.  There is also a prestigious golf course here and a national park.',
          location_id: 400,
        },
        {
          // id: 23,
          title: 'Dingle Peninsula',
          details: 'By far one of my favorite things to see!!  You drive on a one lane road along the peninsula, some parts right on the edge of the cliff.  There are fantastic views!  I would not skip this! You could also do the Ring of Kerry which is similar.  One tip is to take a bus tour, if you are not already on a bus tour, because everyone drives on the road in one direction, mostly due to all the big tour buses that go through.  You could get stuck backing up your car on a one lane road to let a huge bus go by.   If you take a bus tour just for this part, you’ll be able to see the views without worrying about driving as your bus driver will be much more experienced. Dingle is also a cute, small town. There are a couple good restaurants to eat at and shops.',
          location_id: 400,
        },
        {
          // id: 24,
          title: 'Cliffs of Moher',
          details: 'This is a must!  Fantastic views!  You can see these on your way up to Galway.',
          location_id: 400,
        },
        {
          // id: 25,
          title: 'Westport',
          details: 'Westport could be a good option for you to stop if you are in the area or continuing to travel up to the northern part of Ireland. It was small, quaint, and a little more quiet than some of the others.  he main reason we were in Westport though was to go to Achill Island.  Achill Island has very cool landscape and scenery however, it is not very populated as many people left the island during The Great Hunger (which is what the Irish call The Potato Famine).  So, there is not much to do other than drive and see the sights but it’s quite cool.',
          location_id: 400,
        },
      ]);
    });
};
