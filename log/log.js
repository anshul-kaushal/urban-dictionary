//import fs to write to log.txt file
var fs = require('fs');

var log = {};

// function called from dictionary module that takes word and response as parameters and writes them to log.txt file 
log.writeToFile = function(word, response) {
    console.log(`---------writing to log.txt file---------`);
    fs.appendFile(
        __dirname + `/log.txt`,
        `${new Date()} => ${word}: ${JSON.stringify(response)} \r\n`,
        function(err){
            if(err) throw err;
            console.log(`log file updated`)
        }
    )
}

//exporting module to be imported by dictionary
module.exports = log;