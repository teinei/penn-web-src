var express = require('express');
//we need to import/include the express package
var app = express();
//the express function, to create our express app
//represents in this variable app

app.use('/about', (req,res)=> {
    res.send('This is the about page.');
})

app.use('/login', (req,res)=> {
    res.send('This is the login page.');
})

app.use(/*default*/ (req,res)=> {
    res.status(404).send('Not found!');
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
 