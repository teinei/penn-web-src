/*
src2
415 ejs welcome
seperate js from html
embedded js, ejs
*/
//
var express = require('express');
var app = express();
//ejs is one of our view engine
app.set('view engine','ejs');
//ejs goes into ./view dir
//
app.get('/',(req,res) => {
    //welcome == welcome.ejs
    res.render('welcome',{username:'CandyLover',isAdmin: true});
    //pass arguments by js objects
    //
});
//
//
app.listen(3000,() => {
    console.log('Listening on port 3000, 414d, form');
});
//