// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var sketch1 = new db.Sketch({ 

	sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
	name: 'Camila',
	// materials: 'Material',
	paper: 'Moleskin Watercolour',
	height: '8.5 inches',
	width: '11 inches',
	// date: '22/11/2016',
	hours: 12,
	location: 'Analog Coffee',
	lng: 42.66,
	lat: -123.21,
	complete: true

});

var sketch2 = new db.Sketch({ 

	sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
	name: 'Jack',
	// materials: ['Watercolour', 'Watercolour pencil', 'Acrylic'],
	paper: 'Moleskin Watercolour',
	height: '8.5 inches',
	width: '11 inches',
	// date: '22/11/2016',
	hours: 10,
	location: 'Café Rosso',
	lng: 42.66,
	lat: -123.21,
	complete: false

});

var sketch3 = new db.Sketch({ 

	sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
	name: 'Rosa',
	// materials: ['Watercolour', 'Watercolour pencil', 'Acrylic'],
	paper: 'Moleskin Watercolour',
	height: '7 inches',
	width: '4.5 inches',
	// date: '22/11/2016',
	hours: 6,
	location: 'Philosafy Café',
	lng: 42.66,
	lat: -123.21,
	complete: true

});

// db.Sketch.create(sketch1, function(err, newsketch){
//   if (err){
//     return console.log('Error:', err);
//   }
//   console.log('Created new sketch', sketch1.name)
//   // process.exit(); // we're all done! Exit the program.
// });

// db.Sketch.create(sketch2, function(err, newsketch){
//   if (err){
//     return console.log('Error:', err);
//   }
//   console.log('Created new sketch', sketch2.name)
//   // process.exit(); // we're all done! Exit the program.
// });

// db.Sketch.create(sketch3, function(err, newsketch){
//   if (err){
//     return console.log('Error:', err);
//   }
//   console.log('Created new sketch', sketch3.name)
//   // process.exit(); // we're all done! Exit the program.
// });

// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


db.Sketch.remove({}, function(err, sketches) {
  	
  	console.log('removed all sketches');

	db.Sketch.create(sketch1, function(err, newsketch){
	  if (err){
	    return console.log('Error:', err);
	  }
	  console.log('Created new sketch', sketch1.name)
	  // process.exit(); // we're all done! Exit the program.
	});

	db.Sketch.create(sketch2, function(err, newsketch){
	  if (err){
	    return console.log('Error:', err);
	  }
	  console.log('Created new sketch', sketch2.name)
	  // process.exit(); // we're all done! Exit the program.
	});

	db.Sketch.create(sketch3, function(err, newsketch){
	  if (err){
	    return console.log('Error:', err);
	  }
	  console.log('Created new sketch', sketch3.name)
	  // process.exit(); // we're all done! Exit the program.
	});

});
