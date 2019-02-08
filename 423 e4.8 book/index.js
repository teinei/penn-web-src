var express = require('express'); //use express lib
var app = express();
app.set('view engine', 'ejs'); // use ejs

var bodyParser = require('body-parser'); // .. middle ware
app.use(bodyParser.urlencoded({ extended: true }));

var Book = require('./Book.js'); // can use book class

app.use('/createbook', (req, res) => { //
	console.log(req.body); //show body of request look like
	var newBook = new Book(req.body); // create new book object
	newBook.save( (err) => { //save into db
		if (err) { //error
		    res.type('html').status(500);
		    res.send('Error: ' + err);
		}
		else {
			//res.send('Created new book');
			res.render('created', {book:newBook});
		}
	}); 
});



app.use('/search', (req, res) => { //handle this request
	
	if (req.body.which == 'all') { //and search
	    searchAll(req, res);
	}
	else if (req.body.which == 'any') { //search any
	    searchAny(req, res);
	}
	else { //set defalt to search all
	    searchAll(req, res);
	}
	

});


function searchAny(req, res) { //

    var terms = [];

    if (req.body.title) {
		//title is exactly the title typed in
		//terms.push( { title: req.body.title });
		//
		terms.push( { title: { $regex : req.body.title } });
		//tell mango to that I want to do a search
		//for a title that includes the word 'programming'
		//we use a regular expression
    }
    if (req.body.name) {
		terms.push( { 'authors.name' : req.body.name });
    }
    if (req.body.year) {
		terms.push( { year: req.body.year });
    }
	var query = { $or : terms };
	// dollar sign or as property name
	console.log(query);
	// 
	Book.find( query, (err, books) => {
		if (err) {
		    res.type('html').status(500);
		    res.send('Error: ' + err);
		}
		else {
		    res.render('books', { books: books });
		}
	}).sort( { 'title': 'asc' } ); //add the sort function 
	// to sort the result
	//add after the result function

} 

function searchAll(req, res) {

	var query = {}; //empty object

	if (req.body.title) { //first input name
	    query.title = req.body.title;
	}
	// if() qu...; //no {}s
	if (req.body.name) {
		/*
		search property of object A 
		is property of another object B
		*/
		query['authors.name'] = req.body.name;
		//set the property
	}

	console.log(query); //log the property

	if (req.body.year) {
	    query.year = req.body.year;
	}

	Book.find( query, (err, books) => { //
		if (err) {
		    res.type('html').status(500);
		    res.send('Error: ' + err);
		}
		else {
		    res.render('books', { books: books });
		}
	});
	
}




app.use('/public', express.static('public'));

app.use('/', (req, res) => { res.redirect('/public/bookform.html'); } );

app.listen(3000,  () => {
	console.log('Listening on port 3000');
});
