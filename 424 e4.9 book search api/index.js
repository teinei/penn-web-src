var express = require('express'); //require express lib
var app = express();
app.set('view engine', 'ejs');

var bodyParser = require('body-parser'); //body parser
app.use(bodyParser.urlencoded({ extended: true }));

var Book = require('./Book.js');

var router = express.Router();

app.use( '/api', (req, res) => { //api middle ware
	//
	var query = {}; //query object
	if (req.query.title) { //title
		query.title = { $regex : req.query.title };
		//regular expression
	}
	if (req.query.name) {
	    query['authors.name'] = { $regex: req.query.name };
	}
	if (req.query.year) {
	    query.year = req.query.year;
	}

	if (Object.keys(query).length == 0) { //if query length is 0
	    res.json({});
	}
	else {
	    Book.find( query, (err, books) => { //
		if (err) { //
			//send these if there is error
		    res.type('html').status(500);
		    res.send('Error: ' + err); 
		}
		else {
		    res.json(books);
		}
	    });	    
	    }
	}
    );



/***********************************************/



app.use('/public', express.static('public'));




app.listen(3000,  () => {
	console.log('Listening on port 3000');
    });
