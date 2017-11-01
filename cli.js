#!/usr/bin/env node
'use strict';

/*
 * Dependencies.
 */
var basicTtsPlayer = require('./');
var pack = require('./package.json');

/*
 * Arguments.
 */
var argv = process.argv.slice(2);

/*
 * Command.
 */
var command = Object.keys(pack.bin)[0];

/**
 * Help.
 *
 * @return {string}
 */
function help() {
    return [
        '',
        'Usage: ' + command + ' [string]',
        '',
        pack.description,
        '',
        'Options:',
        '',
        '  -h, --help           output usage information',
        '  -v, --version        output version number',
        '',
        'Usage Example',
        '$ ' + command + ' "Hello, this is a simple string"',
    ].join('\n  ') + '\n';
}

/*
 * Program.
 */
if (
    argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1
) {
    console.log(help());
} else if (
    argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1
) {
    console.log(pack.version);
} else if (argv.length) {
    var string = argv[0];
    basicTtsPlayer(string);
} else {
    console.log(help());
}
