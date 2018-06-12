
require("dotenv").config();

var Twitter = require("twitter")
var Spotify = require("node-spotify-api")

var keys = require("./keys.js")
var request = require("request")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var nodeArg = process.argv[2];

console.log("-----------------------")



spotify.search({ type: 'track', query: 'In Flames You Burn', limit: 3 }, function (error, data) {
    if (!error) {
        for (var i = 0; i < data.tracks.items.length; i++) {
            var songData = data.tracks.items[i];
            //artist
            console.log("Artist: " + songData.artists[0].name);
            //song name
            console.log("Song: " + songData.name);
            //spotify preview link
            console.log("Preview URL: " + songData.preview_url);
            //album name
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");

        }
    } else {
        console.log('Error occurred.');
    }
});

var params = { screen_name: 'stevens91012116' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        for (var i = 0; i < tweets.length; i++) {
            var date = tweets[i].created_at;
            console.log("Steven tweeted '" + tweets[i].text + "' On " + date.substring(0, 19));
            console.log("-----------------------")
        }
    }
});