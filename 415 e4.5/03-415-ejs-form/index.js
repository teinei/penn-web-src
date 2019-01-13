/*
src3
/name/Lydia/location/United States
*/
var express = require('express');
var app = express();
//
app.set('view engine','ejs');
//
//
app.get('/',(req,res) => {
    //
    res.render('welcome',{username:'CandyLover',isAdmin: true});
    //
});
//
app.use('/public', express.static('files'));
//
///*
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//
app.use('/handleForm', (req,res) => {
    //
    var name = req.body.username;
    var animals = [].concat(req.body.animal);
    //
    res.render('showAnimals',{ name: name, animals: animals })
    //
    //
});
//*/
//
//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 415, form');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 