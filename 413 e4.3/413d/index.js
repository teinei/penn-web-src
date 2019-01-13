var express = require('express');
//we need to import/include the express package
var app = express();
//the express function, to create our express app
//represents in this variable app

//
var nameFinder = (req, res, next) => {
    var name = req.query.name;
    if(name) req.username = name.toUpperCase();
    else req.username = 'Guest';
    next();
}

var greeter = (req, res, next)=> {
    res.status(200).type('html');
    res.write('Hello, '+req.username);
    next();
}

var adminName = (req, res, next) => {
    req.username = 'Admin';
    next();
}
//

//app.use(logger);
//
app.use('/welcome', nameFinder, greeter,(req, res) =>{ res.end();});
app.use('/admin', adminName, greeter, (req,res)=> {res.end();} );
//
app.use(/*default*/ (req,res)=> {
    res.status(404).sendFile(__dirname + '/files/404.html');
})
//
//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 413d, nameFinder');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 