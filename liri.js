
require("dotenv").config();

var Twitter = require("twitter")
var Spotify = require("node-spotify-api")

var keys = require("./keys.js")
var request = require("request")
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var fs = require('fs');

var nodeArgv = process.argv;
var command = process.argv[2];

var searchTerm = "";


for (var i = 3; i < nodeArgv.length; i++) {
    if (i > 3 && i < nodeArgv.length) {
        searchTerm = searchTerm + "+" + nodeArgv[i];
    } else {
        searchTerm = searchTerm + nodeArgv[i];
    }
}

if (command === "spotify-this-song" && searchTerm) {

    spotify.search({ type: 'track', query: searchTerm, limit: 1 }, function (error, data) {
        if (!error) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var songData = data.tracks.items[i];

                console.log("Artist: " + songData.artists[0].name);
                console.log("Song: " + songData.name);
                console.log("Album: " + songData.album.name);
                console.log("Preview URL: " + songData.preview_url);
                console.log("-----------------------");

            }
        } else {
            console.log('Spotify Error');
        }
    })

}
else if (command === "spotify-this-song" && !searchTerm) {

    spotify.search({ type: 'track', query: "Ace of Base", limit: 1 }, function (error, data) {
        if (!error) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var songData = data.tracks.items[i];

                console.log("Artist: " + songData.artists[0].name);
                console.log("Song: " + songData.name);
                console.log("Album: " + songData.album.name);
                console.log("Preview URL: " + songData.preview_url);
                console.log("-----------------------");

            }
        } else {
            console.log('Spotify Error');
        }
    })

}

else if (command === "my-tweets") {

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
}
else if (command === "movie-this" && searchTerm) {

    request("http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        if (!error && response.statusCode === 200) {

            var body = JSON.parse(body);

            console.log(body.Title);
            console.log("Released In:  " + body.Year);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Rotten Tomatoes Rating: " + body.Ratings[1].Value);
            console.log("-----------------------")
        }
    });

}
else if (command === "movie-this" && !searchTerm) {

    request("http://www.omdbapi.com/?t=mr_nobody&y=&plot=short&apikey=trilogy", function (error, response, body) {

        if (!error && response.statusCode === 200) {

            var body = JSON.parse(body);

            console.log(body.Title);
            console.log("Released In:  " + body.Year);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Rotten Tomatoes Rating: " + body.Ratings[1].Value);
            console.log("-----------------------")
        }
    });

}
else if (command === "do-what-it-says") {

    fs.readFile('./random.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });

}
