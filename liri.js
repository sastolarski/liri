
require("dotenv").config();

var Twitter = require("twitter")
var Spotify = require("node-spotify-api")

var keys = require("./keys.js")
var request = require("request")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log("hello")