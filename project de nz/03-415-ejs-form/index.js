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
app.use('/public', express.static('html'));
//
///*
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//
//

app.use('/handleSurvey', (req,res) => {
    //
    var js_ordinal = req.body.ordinal;
    var js_stage = req.body.stage;
    var js_classNom = req.body.classNomDigit0;
    js_classNom += req.body.classNomDigit1;
    js_classNom += req.body.classNomDigit2;
    js_classNom += req.body.classNomDigit3;
    //
    var js_year = req.body.year;
    var js_month = req.body.month;
    var js_day = req.body.dayDigit1;
    js_day += req.body.dayDigit2;
    //
    var js_kid_nom = req.body.studentNom;
    var js_class_nom = req.body.classNom;
    var js_teacher_nom = req.body.teacherNom;
    var js_relation2kid = req.body.relation2student;
    //
    var js_q1 = req.body.q1;
    var js_q2 = req.body.q2;
    var js_q3 = req.body.q3;
    var js_q4 = req.body.q4;
    var js_q5 = req.body.q5;
    //
    var js_q6 = req.body.q6;
    var js_q7 = req.body.q7;
    var js_q8 = req.body.q8;
    var js_q9 = req.body.q9;
    //
    var js_q10 = req.body.q10;
    //
    var js_q11 = req.body.q11;
    //
    var js_text1 = req.body.text1;
    var js_text2 = req.body.text2;
    var js_text3 = req.body.text3;
    //
    //var name = req.body.username;
    //var animals = [].concat(req.body.animal);
    //
    res.render('showSurvey',
    { 
        //
        ejs_ordinal: js_ordinal, ejs_stage: js_stage, ejs_classNom: js_classNom,
        ejs_year: js_year, ejs_month: js_month, ejs_day: js_day,
        //
        ejs_kid_nom: js_kid_nom, ejs_class_nom: js_class_nom, 
        ejs_teacher_nom: js_teacher_nom, ejs_relation2kid: js_relation2kid,
        //
        ejs_q1: js_q1, ejs_q2: js_q2, ejs_q3: js_q3, ejs_q4: js_q4, ejs_q5: js_q5,
        ejs_q6: js_q6, ejs_q7: js_q7, ejs_q8: js_q8, ejs_q9: js_q9,
        ejs_q10: js_q10, ejs_q11: js_q11,
        //
        ejs_text1: js_text1, ejs_text2: js_text2, ejs_text3: js_text3
        //
    });
    //
});
//
//
app.use('/handleForm', (req,res) => {
    //
    var js_name = req.body.username;
    var animals = [].concat(req.body.animal);
    //
    res.render('showAnimals',{ ejs_name: js_name, animals: animals });
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