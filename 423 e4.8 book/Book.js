//set up schema
//contain objects
var mongoose = require('mongoose'); //library required

// where does the db name come from? I just made this up
mongoose.connect('mongodb://localhost:27017/myDatabase');
// hostname port myDatabase or any name

var Schema = mongoose.Schema; 

var authorSchema = new Schema({ // author
	name: String, //name
	affiliation: String //UPenn danwei, where the author works
    });

var bookSchema = new Schema({ //
	title: {type: String, required: true, unique: true},
	//title
	year: Number,
	authors: [authorSchema] //has
	//author
    });


module.exports = mongoose.model('Book', bookSchema);
// class what to use in the rest of the app

