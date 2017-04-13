var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

module.exports.Sketch = require("./sketch.js");
module.exports.Material = require("./material.js");
