const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(apiURL, (error, response, body) => {
    let desc = JSON.parse(body)[0].description;
    if (error) {
      callback(error, null);
      return;
    }
    if (desc === null) {
      console.log('Sorry! No description found!');
      return;
    }
    if (body) {
      callback(null, desc);
      return;
    }
    //return desc.trim();
  });
};

//console.log(fetchBreedDescription('Siberian', undefined));
module.exports = fetchBreedDescription;