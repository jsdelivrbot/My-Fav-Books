

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
  title: String,
  author: String,
  category: String,
  todel: {
    type: Boolean,
    default: false
  }
});


    // Exporting template
module.exports = mongoose.model('Book', BookSchema);
