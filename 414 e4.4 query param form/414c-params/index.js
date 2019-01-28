/*
src2
/name/Lydia/location/United States
prameterized url
*/
var express = require('express');
var app = express();

// key1/value1/key2/value2
app.use('/name/:userName/location/:userLocation', (req, res)=> {
    //
    var params = req.params;
    console.log(params);
    //
    var name = params.userName;
    var location = params.userLocation;
    //
    var length = Object.keys(params).length;//how many keys
    //get 2, 2 properties in the query object
    //number of keys
    res.send('Hello World!');
});

//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 414b, query');
});