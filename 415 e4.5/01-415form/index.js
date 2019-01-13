/*
src3
/name/Lydia/location/United States
*/
//var express = require('express');
//var app = express();
app.use('/public', express.static('files'));
//
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//
app.use('/handleForm', (req,res) => {
    //
    var name = req.body.username;
    var animals = [].concat(req.body.animal);
    //
    res.type('html').status(200);
    res.write('Hello, ' + name + ', nice to meet you.');
    res.write('<p>Here are the animals you like:');
    res.write('<ul>');
    animals.forEach((animal)=>{
        res.write('<li>'+animal+'</li>');
    });
    res.write('</ul>');
    res.send('Thank you');
    res.write("<a href='/public/form.html'>"+"Back to form</a>");
    res.end();
    //
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
 