var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var Person = require('./Person.js');

app.use('/create', (req, res) => { // slash create uri
	var newPerson = new Person ({ // create a person object
		name: req.body.name, // set its name property
		age: req.body.age, // 
	});

	newPerson.save( (err) => { //write data to database
		// argument of this save function will be this callback function
		// the parameter to this callback function is the error
		if (err) { //if there is an error
			// send back http response
			res.type('html').status(500); 
			// 500 (five hundred) is the status code
			// when there is an error
		    res.send('Error: ' + err); // sent the error message it self
		}
		else { // no error, save data to db
			res.render('created', { person : newPerson });
			// name of ejs file: created  views/created.ejs
			// person is the roperty, new person is the value
		}
	} ); 

});

app.use('/public', express.static('public'));

app.use('/', (req, res) => { res.redirect('/public/personform.html'); } );

app.listen(3000,  () => {
	console.log('Listening on port 3000');
    });
