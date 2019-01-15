/*
413-3 video 4.3
-------------------------
middleware express.static
middleware next()
-------------------------
./index.js
./files/index.html
*/
var express = require('express');
var app = express();

var logger = (req, res, next) => { 
    var url = req.url; //get url
    var time = new Date(); //date object of current date y time
    //joe code
    //res.write('Received request for '+url+ ' at ' + time);
    //res.end();
    //joe code
    console.log('Received request for '+url+ ' at ' + time);
    //next function
    next();
}
//
//logger middleware will be invoked on any http request
//it is going be in the chain of any request that we get 
app.use(logger);//logger for all
//

app.use('/public', express.static('files'));

app.use(/*default*/ (req,res)=> {
    res.status(404).sendFile(__dirname + '/files/404.html');
})
//
//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 413c, logger');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 