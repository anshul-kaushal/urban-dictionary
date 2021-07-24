// imports log module as log
var log = require('../log/log');

var dictionary = {};

// function is called from app module and takes in the param parameter to find its meaning and send the api response along with the word to log module's writeToFile function
dictionary.getMeaning = function(word) {
    // if user has provided a third parameter
    if(word) console.log(`-----------looking for ${word}-----------`);
    var axios = require("axios").default;
    var options = {
                    method: 'GET',
                    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
                    params: {term: word},
                    headers: {
                    'x-rapidapi-key': '098605edd0mshbc92827b73a027ap180926jsn14f96c802181',
                    'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }
};
// fetching data from api
axios.request(options).then(function (response) {
    // if response list is empty
    if (response.data.list.length == 0) {
        console.log(`no results were found for ${word}`);
    }
    // if proper response is fetched
    else {
        var apiResponse = {meaning: '', example: ''}
        apiResponse.meaning = response.data.list[0].definition;
        apiResponse.example = response.data.list[0].example;
        console.log(`${word}: ${apiResponse.meaning} \r\n example: ${apiResponse.example}`);
        log.writeToFile(word, apiResponse);
    }
// in case of any error encountered
}).catch(function (error) {
    //if user has not provided a word
    if (typeof word === 'undefined'){
        console.error(`please provide a word as the third parameter: node app.js word`);
    }
    //for other errors
    else console.error(error);
});
}
//exporting dictionary module to be imported by app 
module.exports = dictionary;