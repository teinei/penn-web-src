/*
413-4 video 4.3
-------------------------
diff roots use diff middleware functions 
roots, raw.ters
-------------------------
./index.js
/welcome?name=joe
/welcome
/admin
*/
var express = require('express');
var app = express();
// (2
//name finder takes request, response y next
var nameFinder = (req, res, next) => {
    var name = req.query.name; //use request query to get the name
    if(name) req.username = name.toUpperCase();
    //add a property called username, take the name y convert it to uppercase
    else req.username = 'Guest';
    //name not defined/di.Fai.nd/
    //add property username, set it to 'Guest'
    next(); //invoke next function
}
// 2)

//takes request response and next
var greeter = (req, res, next)=> {
    //start http response by setting the status to 200
    //set the content type to html
    res.status(200).type('html');
    //write hello and then the username
    //username is the property that we set by the nameFinder
    //which is upstream in the root 
    res.write('Hello, '+req.username);
    //call next
    next(); // go to the next middle ware 
    // the next function is 
    // a little 3.nAA.m3n3s function call res.end()
    // to send the html and close the function
}
//
var adminName = (req, res, next) => {
    req.username = 'Admin'; //set username to admin
    next(); //invoke next
}
//
//app.use(logger);
// (1 
app.use('/welcome', nameFinder, greeter,(req, res) =>{ res.end();});
//route/root/ for slash welcome uri
//the first middleware function is nameFinder
//in this case, the next function is 'greeter'
// 1)
//
//
//invoke the adminName middle ware
//root for slash admin/AE.d.min/
app.use('/admin', adminName, greeter, (req,res)=> {res.end();} );
// invoke adminName function
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
 