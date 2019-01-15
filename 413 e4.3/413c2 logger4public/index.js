var express = require('express');
//we need to import/include the express package
var app = express();
//the express function, to create our express app
//represents in this variable app

//
var logger = (req, res, next) => {
    var url = req.url;
    var time = new Date();
    console.log('Received request for '+url+ ' at ' + time);
    //next function
    next();
}
//

//app.use(logger);
//

app.use('/public', logger ,express.static('files'));

app.use(/*default*/ (req,res)=> {
    res.status(404).sendFile(__dirname + '/files/404.html');
})
//
//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 413c2, logger');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 