// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var sketch1 = new db.Sketch (

	sketch = 'https://www.instagram.com/p/BNI4ppXj_bI/',
	name = 'Camila',
	materials = 'Material',
	paper = 'Moleskin Watercolour',
	height = '8.5 inches',
	width = '11 inches',
	// date = '22/11/2016',
	hours = 12,
	location = 'Analog Coffee',
	lng = 42.66,
	lat = -123.21,
	complete = true

);

var sketchList = [

	{

		sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
		name: 'Camila',
		materials: 'Material',
		paper: 'Moleskin Watercolour',
		height: '8.5 inches',
		width: '11 inches',
		// date: '22/11/2016',
		hours: 12,
		location: 'Analog Coffee',
		lng: 42.66,
		lat: -123.21,
		complete: true

	},
	{

		sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
		name: 'Jack',
		materials: ['Watercolour', 'Watercolour pencil', 'Acrylic'],
		paper: 'Moleskin Watercolour',
		height: '8.5 inches',
		width: '11 inches',
		// date: '22/11/2016',
		hours: 10,
		location: 'Café Rosso',
		lng: 42.66,
		lat: -123.21,
		complete: false

	},
	{

		sketch: 'https://www.instagram.com/p/BNI4ppXj_bI/',
		name: 'Rosa',
		materials: ['Watercolour', 'Watercolour pencil', 'Acrylic'],
		paper: 'Moleskin Watercolour',
		height: '7 inches',
		width: '4.5 inches',
		// date: '22/11/2016',
		hours: 6,
		location: 'Philosafy Café',
		lng: 42.66,
		lat: -123.21,
		complete: true

	}
];

db.Sketch.create(sketch1, function(err, newsketch){
  if (err){
    return console.log('Error:', err);
  }
  console.log('Created new sketch', sketch1._id)
  process.exit(); // we're all done! Exit the program.
});

// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


// db.Sketch.remove({}, function(err, sketches) {
//   console.log('removed all sketches');
//   db.Sketch.create(sketchList, function(err, sketches){
//     if (err) {
//       console.log('Error:', err);
//       return;
//     }
//     console.log('recreated all sketches');
//     console.log('created', sketchList.length, 'sketches');


//     // db.Book.remove({}, function(err, books){
//     //   console.log('removed all books');
//     //   books_list.forEach(function (bookData) {
//     //     var book = new db.Book({
//     //       title: bookData.title,
//     //       image: bookData.image,
//     //       releaseDate: bookData.releaseDate
//     //     });
//     //     db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
//     //       console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
//     //       if (err) {
//     //         console.log(err);
//     //         return;
//     //       }
//     //       book.author = foundAuthor;
//     //       book.save(function(err, savedBook){
//     //         if (err) {
//     //           return console.log(err);
//     //         }
//     //         console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
//     //       });
//     //     });
//     //   });
//     // });

//   });
// });
