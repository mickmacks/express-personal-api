var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MaterialSchema = new Schema({

	1: String,
	2: String,
	3: String,
	4: String,
	5: String

});

var Material = mongoose.model('Material', MaterialSchema);

module.exports = Material;
