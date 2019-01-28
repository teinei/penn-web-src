/*
src1 in notes
414b dir name
----------------------------------
//key value pair
?name=Lydia&location=United+States
----------------------------------
*/
var express = require('express');
var app = express();
//
app.use('/', (req, res)=> {
    //take request and access query
    var query = req.query;
    console.log(query);

    var name = query.name;
    var location = query.location;

    var length = Object.keys(query).length;

    res.send('Hello World!');
});

//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 414b, query');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 