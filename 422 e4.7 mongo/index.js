var express = require('express');
var app = express();

app.set('view engine', 'ejs');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var Person = require('./Person.js');



app.use('/create', (req, res) => {
	var newPerson = new Person ({
		name: req.body.name,
		age: req.body.age,
	    });
	newPerson.save( (err) => { 
		if (err) {
		    res.type('html').status(500);
		    res.send('Error: ' + err);
		}
		else {
		    res.render('created', {person : newPerson});
		}
	    } ); 

    });

// slash all to handle view all
app.use('/all', (req, res) => { //rawt '/all'
    
    Person.find( {}, (err, allPeople) => { // conduct query
		if (err) {
		    res.type('html').status(500);
		    res.send('Error: ' + err);
		}
		else {
		    if (allPeople.length == 0) { // no person objects in db
				res.type('html').status(200); //ok status
				res.send('There are no people');
		    }
		    else {
				res.render('showAll', { persons: allPeople });
				//
		    }
		}
	});
    });


app.use('/person', (req, res) => { //
	var searchName = req.query.name;
	Person.findOne( {name: searchName}, (err, person) => { //another search
		//person .find find all
		if (err) {
		    res.type('html').status(500);
		    res.send('Error: ' + err); //text of error
		}
		else if (!person) { //no person
		    res.type('html').status(200);
		    res.send('No person named ' + searchName);
		}
		else { //everything is ok
		    res.render('personInfo', {person: person});
		}
	    });
	
    });




app.use('/update', (req, res) => { //update function

    var updateName = req.body.username;
    var updateAge = req.body.age;

	Person.findOne( {name: updateName}, (err, person) => {
		if (err) {
		    res.type('html').status(500);
		    res.send('Error: ' + err);
		}
		else if (!person) {
		    res.type('html').status(200);
		    res.send('No person named ' + updateName);
		}
		else {
			person.save( (err) => {
				if(err){ //check for errors 
					res.type('html').status(500);
					res.send('Error: '+err);
				}else{
					res.render('updated', { person: person})
				}
			});
		    //res.render('updated', { person : person });
		}
	    });
    
    });



/*************************************************/



app.use('/public', express.static('public'));

app.use('/', (req, res) => { res.redirect('/public/personform.html'); } );



app.listen(3000,  () => {
	console.log('Listening on port 3000');
    });
