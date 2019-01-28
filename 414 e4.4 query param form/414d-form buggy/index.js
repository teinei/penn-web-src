/*
src3
get info by form
-------------------
/public/form.html
-------------------
*/
var express = require('express');
var app = express();

//static middleware
app.use('/public', express.static('files'));
//
var bodyParser = require('body-parser');
//handle forms of post
app.use(bodyParser.urlencoded({extended: true}));
//
//the action of submiting our form
app.use('/handleForm', (req,res) => {
    //
    var name = req.body.username;
    var animals = req.body.animal;
    //joe code
    res.write(name+" "+animals)
    //joe code
    res.send('Thank you');
    //
});
//
//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 414d, form');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 