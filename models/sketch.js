var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SketchSchema = new Schema({

	sketch: String,
	name: String,
	materials: {
		type: Schema.Types.ObjectId,
		ref: 'Material'
	},
	paper: String,
	height: String,
	width: String,
	date: Date,
	hours: Number,
	location: String,
	lng: Number,
	lat: Number,
	complete: Boolean

});

var Sketch = mongoose.model('Sketch', SketchSchema);
module.exports = Sketch;
