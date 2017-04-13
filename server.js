// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/mickmacks/express-personal-api/README.md",
    baseUrl: "http://serene-falls-27789.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      // {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function apiIndex(req, res) {
  res.json({

    name: 'Mahmoud Bachir',
    githubUsername: 'mickmacks',
    githubLink: 'https://github.com/mickmacks',
    githubProfileImage: 'https://avatars1.githubusercontent.com/u/19177266?v=3&s=460',
    personalSiteLink: 'http://www.mahmoudbachir.com',
    currentCity: 'San Francisco',
    pets: [
      {name: 'Tater', type: 'Dog', breed:'Bassett Hound'},
      {name: 'Pablo', type: 'Cat', breed:'Maine Coone'}
    ]

  });

});

app.get('/api/sketchbook', function apiSketchbook(req, res) {

  res.json([

    { 
      _id: 1,
      sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
      name: 'Camila',
      materials: ['Watercolour', 'Watercolour pencil', 'Acrylic'],
      paper: 'Moleskin Watercolour',
      height: '8.5 inches',
      width: '11 inches',
      date: '22/11/2016',
      hours: 12,
      location: 'Analog Coffee',
      lng: 42.66,
      lat: -123.21,
      complete: true
    },
    { 
      _id: 2,
      sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
      name: 'Jack',
      materials: ['Watercolour', 'Watercolour pencil', 'Acrylic'],
      paper: 'Moleskin Watercolour',
      height: '8.5 inches',
      width: '11 inches',
      date: '22/11/2016',
      hours: 10,
      location: 'Café Rosso',
      lng: 42.66,
      lat: -123.21,
      complete: false
    },    
    { 
      _id: 3,
      sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
      name: 'Rosa',
      materials: ['Watercolour', 'Watercolour pencil', 'Acrylic'],
      paper: 'Moleskin Watercolour',
      height: '7 inches',
      width: '4.5 inches',
      date: '22/11/2016',
      hours: 6,
      location: 'Philosafy Café',
      lng: 42.66,
      lat: -123.21,
      complete: true
    }

  ]);
  
});



/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
