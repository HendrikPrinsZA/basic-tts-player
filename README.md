# basic-tts-player
[![NPM version](https://badge.fury.io/js/basic-tts-player.png?branch=master)](http://badge.fury.io/js/wgetjs) [![Build Status](https://travis-ci.org/angleman/basic-tts-player.png?branch=master)](https://travis-ci.org/angleman/basic-tts-player) [![Dependency Status](https://gemnasium.com/angleman/basic-tts-player.png?branch=master)](https://gemnasium.com/angleman/basic-tts-player) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](#licensemit) [![Downloads](https://img.shields.io/npm/dt/basic-tts-player.svg)](https://npmjs.org/package/basic-tts-player)

Convert text to speech and play the sound

## Install

```
npm install basic-tts-player
```

## Usage

```javascript
var bTtsPlayer = require('basic-tts-player');

bTtsPlayer("Hello, this is a test string");
```

## CLI

Install:

```bash
$ npm install -g basic-tts-player
```

Use:

```text
Usage: basic-tts-player [string]

Text to speech to speaker

Options:

  -h, --help           output usage information
  -v, --version        output version number

Usage Example
$ basic-tts-player "Hello, this is a simple string"
```

## License: MIT
