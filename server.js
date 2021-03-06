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
    documentationUrl: "https://github.com/mickmacks/express-personal-api/blob/master/README.md",
    baseUrl: "http://serene-falls-27789.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/sketchbook", description: "Index of all sketchbook data"},
      {method: "GET", path: "/api/sketchbook/:id", description: "Show a specific sketch"},
      {method: "POST", path: "/api/sketchbook?name=Example&image=ExampleURL&etc…", description: "Make new database entry using url parameters"},
      {method: "PATCH", path: "/api/sketchbook?id=ID&name=Example&image=ExampleURL&etc…", description: "Replace a database entry"},
      {method: "DELETE", path: "/api/sketchbook/:id", description: "Delete a database entry"}
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
    petFriends: [
      {name: 'Tater', type: 'Dog', breed:'Bassett Hound'},
      {name: 'Pablo', type: 'Cat', breed:'Maine Coone'}
    ]

  });

});

// GET the sketchbook json with compiled data from Sketch and Material models 

app.get('/api/sketchbook', function (req, res) {
  // send all books as JSON response
  db.Sketch.find({})
    // populate fills in the author id with all the author data
    .populate('material')
    .exec(function(err, sketches){

      if (err) { 
        return console.log("index error: " + err); 
      } else {
        res.json(sketches);
      }

    });
});

// POST a new sketch entry to the database.

// PUT a new data entry into an existing sketch database entry.

// DELETE an entire sketch entry from the database.







/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
