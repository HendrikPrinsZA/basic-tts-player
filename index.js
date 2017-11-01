'use strict';

/**
 * Module dependencies.
 */
var googleTTS = require('google-tts-api');
var player = require('play-sound')({});
var wget = require('node-wget');

/**
 * Accepts a string as parameter, converts it into an mp3 and plays the sound
 * @param {string} string
 * @return {string}
 */
function basicTtsPlayer(string) {
    googleTTS(string, 'en', 1).then(function (url) {
        wget({
            url: url,
            dest: 'tmp/audio-file.mp3'
        }, function(error, response, body) {
            if (error) {
                console.log('Error: Failed to generate audio file');
            } else {
                player.play('tmp/audio-file.mp3', function(err){
                    if (err) throw err
                    return {
                        url: url
                    };
                });
            }
        });
    })
    .catch(function (err) {
        console.error(err.stack);
    });
};

module.exports = basicTtsPlayer;
