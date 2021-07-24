// import dictionary module as dict
var dict = require('./dictionary/dictionary');

var app = {};

// process the third parameter as store it into the param property of app.config object
app.config = {param: process.argv[2]};

// function calls getMeaning function from dictionary module
app.run = function(param){
    console.log("---------urban dictionary is running---------")
    dict.getMeaning(param);
}

// call function run to kick things off
app.run(app.config.param);
