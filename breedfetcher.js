//const net = require('net');
const process = require('process');
const request = require('request');

const userInput = process.argv[2];

const fetchBreedDescription = function() {
  let apiURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + userInput.slice(0, 3);

  request(apiURL, (error, response, body) => {
    if (response && response.statusCode === 200) {
      const data = JSON.parse(body);
      if (!data[0]) {
        console.log("No description found!");
        return;
      } else {
        console.log(data);
      }
      return;
    }
    if (error) {
      console.log("There is an error: ", error);
      return;
    }
    if (!userInput) {
      console.log("Please select a breed");
      return;
    }
    return;
  });
};

fetchBreedDescription();

module.exports = fetchBreedDescription;