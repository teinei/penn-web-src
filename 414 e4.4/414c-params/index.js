/*
src2
/name/Lydia/location/United States
*/
var express = require('express');
var app = express();

//?name=Lydia&location=United+States
app.use('/name/:userName/location/:userLocation', (req, res)=> {
    //
    var params = req.params;
    console.log(params);
    //
    var name = params.userName;
    var location = params.userLocation;
    //
    var length = Object.keys(params).length;
    //
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
 