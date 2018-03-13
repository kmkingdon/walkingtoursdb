exports.seed = function(knex, Promise) {
  return knex('tours').del()
    .then(function () {
      return knex('tours').insert([
    {
      "id": 1,
      "type": "drinks",
      "firstLatitude": 39.7588605,
      "firstLongitude": -104.9875967,
      "name:": "Rino Brewery Tour",
      "description":
        "Explore Denver's hottest neighborhood. Enjoy the vast number of public murals as you hop between some of Denver's best microbreweries.",
      "duration": "2 hours"
    },
    {
      "id": 2,
      "type": "architechture",
      "firstLatitude": 39.7393251,
      "firstLongitude": -104.9869956,
      "name:": "Mansions of Capital Hill",
      "description":
        "Check out one of Denver's oldest neighboorhoods Capital Hill. Walk the tree lined streets and view the famous Mansions that once earned it the nickname Millionaires Row. ",
      "duration": "2-3 hours"
    },
    {
      "id": 3,
      "type": "history",
      "firstLatitude": 39.7354846,
      "firstLongitude": -105.0001438,
      "name:": "Santa Fe Art District",
      "description":
        "Check out the artsy and vibrant neighboorhood around north Santa Fe drive. ",
      "duration": "1 hour"
    },
    {
      "id": 4,
      "type": "running",
      "firstLatitude": 39.7354846,
      "firstLongitude": -105.0001438,
      "name:": "Cherry Creek and 16th Street",
      "description": "Run the sites of Downtown Denver",
      "duration": "1 hour"
    }
  ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE tours_id_seq RESTART WITH 5;")
    });
};
