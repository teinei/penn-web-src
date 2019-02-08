var mongoose = require('mongoose');

// where does the db name come from? I just made this up
mongoose.connect('mongodb://localhost:27017/myDatabase');

var Schema = mongoose.Schema;

var teacherSchema = new Schema({ //teacher schema
	name: {type: String, required: true, unique: true},
	age: Number
});


// why is the collection called "users"? Is that the default or did I do something?
module.exports = mongoose.model('Person', teacherSchema); //teacher schema
//make the schema avalible to others

teacherSchema.methods.standardizeName = function() { //teacher schema
    this.name = this.name.toLowerCase();
    return this.name;
}