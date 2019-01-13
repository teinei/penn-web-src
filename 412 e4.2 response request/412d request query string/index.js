//412 video 4.2 
//src 412-3
var express = require('express');
//we need to import/include the express package
var app = express();
//the express function, to create our express app
//represents in this variable app

app.use('/', (req,res)=> {
    //res.send('Hello World! 412b req');
    var name = req.query.name; //access the value by specifying the key 'name'
    //get name from http request query
    //http can include a query as part of the url
    //eg /?name=devesh
    // question mark indicates start of query, 
    // and then the key value pair

    res.status(200).type('html'); //response
    //set status, set contents type

    if(name){ //if there is a name in the url query
        res.write('Hi, '+name+", it's nice to see you.");
        //response write function to construct the html send to the browser
        //concatinate hi with user's name and then the message
    }else{ //if name is undefined, the request query did not have a name
        res.write('Welcom, guest!');
        //write the above message
    }
    res.end();//close the connection
    //
})

//finally we will configure the app
app.listen(3000,() => {
    console.log('Listening on port 3000, 412d, combine');
});
//listening on port 3000, which will access by the browser
//define callback function that will be invoked
//once it start to listening 
//we just log the fact, that we are listnening on port 3000
 