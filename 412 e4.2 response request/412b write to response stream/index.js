var express = require('express');
//we need to import/include the express package
var app = express();

app.use('/', (req,res)=> {
    //res.send('Hello World! 412b req');
    //request
    var method = req.method;
    var url = req.headers['user-agent'];
    var agnet = req.get('User-Agent');
    //request
    //-----------------------
    //response
    res.status(200); //send status code
    res.type('html'); //set the content type
    res.write('Hello World'); //write to response stream
    res.write('<p>'); // write function
    res.write('<b>Have a nice day</b>');
    res.end(); // close the connection
    //response
})

//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 412b');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 