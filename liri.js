
require("dotenv").config();

var Twitter = require("twitter")
var Spotify = require("node-spotify-api")

var keys = require("./keys.js")
var request = require("request")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var nodeArg = process.argv[2];

console.log("hello")


spotify
  .search({ 
    type: 'track',
    query: 'All the Small Things',
    limit: 1
 }).then(function(response) {
    console.log(response.tracks.items);
  })
  .catch(function(err) {
    console.log(err);
  });