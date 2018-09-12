'use strict';

/**
 * Module dependencies.
 */
var googleTTS = require('google-tts-api');
var player = require('play-sound')({});
var wget = require('wget-improved');

/**
 * Accepts a string as parameter, converts it into an mp3 and plays the sound
 * @param {string} string
 * @return {string}
 */
function basicTtsPlayer(string) {
    googleTTS(string, 'en', 1).then(function (url) {
        const options = { };
        let download = wget.download(url, '/tmp/basic-tts-player.mp3', options);
        download.on('error', function(err) {
            console.log(err);
        });
        download.on('end', function(output) {
            player.play('/tmp/basic-tts-player.mp3', function(err){
                if (err) throw err
                return {
                    url: url
                };
            });
        });
    })
    .catch(function (err) {
        console.error(err.stack);
    });
};

module.exports = basicTtsPlayer;
