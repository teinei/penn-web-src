/*
413 video 4.3
different response 4 diff requests -- routing/rAW ting/
/about
/login
*/
var express = require('express');
//we need to import/include the express package
var app = express();
//the express function, to create our express app
//represents in this variable app

//create different responses for diff requests
//is known as routing /rAW.ting
app.use('/about', (req,res)=> { //url slash about, invoke this call back function
    res.send('This is the about page.');
})

app.use('/login', (req,res)=> { //
    res.send('This is the login page.');
})

app.use(/*default*/ (req,res)=> { //default call back function
    //res.status(404).send('Not found!'); //content/Kang.t3nt.
    res.status(404).send('not found! Type \"/about\" or \"/login\" ');
})
//
//
//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 413a');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 