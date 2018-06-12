
require("dotenv").config();

var Twitter = require("twitter")
var Spotify = require("node-spotify-api")

var keys = require("./keys.js")
var request = require("request")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var nodeArg = process.argv[2];

console.log("-----------------------")


// var songTitle = "Come, Become, To Be";

// spotify.search({ type: 'track', query: songTitle, limit: 1 }, function (error, data) {
//     if (!error) {
//         for (var i = 0; i < data.tracks.items.length; i++) {
//             var songData = data.tracks.items[i];
//             //artist
//             console.log("Artist: " + songData.artists[0].name);
//             //song name
//             console.log("Song: " + songData.name);
//             //spotify preview link
//             console.log("Preview URL: " + songData.preview_url);
//             //album name
//             console.log("Album: " + songData.album.name);
//             console.log("-----------------------");

//         }
//     } else {
//         console.log('Error occurred.');
//     }
// });

// var params = { screen_name: 'stevens91012116' };
// client.get('statuses/user_timeline', params, function (error, tweets, response) {
//     if (!error) {
//         for (var i = 0; i < tweets.length; i++) {
//             var date = tweets[i].created_at;
//             console.log("Steven tweeted '" + tweets[i].text + "' On " + date.substring(0, 19));
//             console.log("-----------------------")
//         }
//     } else {
//         console.log('Error occurred.');
//     }
// });

var command = process.argv[2];

if (command === "spotify") {
    var songTitle = "Come, Become, To Be";

    spotify.search({ type: 'track', query: songTitle, limit: 1 }, function (error, data) {
        if (!error) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var songData = data.tracks.items[i];
                
                console.log("Artist: " + songData.artists[0].name);   
                console.log("Song: " + songData.name);          
                console.log("Preview URL: " + songData.preview_url);            
                console.log("Album: " + songData.album.name);
                console.log("-----------------------");

            }
        } else {
            console.log('Spotify Error');
        }
    })

} else if (command === "my-tweets") {
    var params = { screen_name: 'stevens91012116' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                var date = tweets[i].created_at;
                console.log("Steven tweeted '" + tweets[i].text + "' On " + date.substring(0, 19));
                console.log("-----------------------")
            }
        } else {
            console.log('Twitter Error');
        }
    })
};