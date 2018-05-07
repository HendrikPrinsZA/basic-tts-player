# basic-tts-player [![NPM version](https://badge.fury.io/js/%40hendrikprinsza%2Fbasic-tts-player.png?branch=master)](http://badge.fury.io/js/%40hendrikprinsza%2Fbasic-tts-player) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](#licensemit) [![Downloads](https://img.shields.io/npm/dt/%40hendrikprinsza%2Fbasic-tts-player.svg)](https://npmjs.org/package/%40hendrikprinsza%2Fbasic-tts-player)

Convert text to speech and play the sound

## IMPORTANT: Security vulnerabilities
This package has some known security vulnerabilities. You should only reference it as an example. I'll keep an eye on the dependent packages and update them as soon as the issues have been resolved.
- [CVE-2018-3728](https://nvd.nist.gov/vuln/detail/CVE-2018-3728)
- [CVE-2014-7191](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-7191)


```
npm i @hendrikprinsza/basic-tts-player
```

## Install

```
npm i @hendrikprinsza/basic-tts-player
```

## Usage

```javascript
var bTtsPlayer = require('basic-tts-player');

bTtsPlayer("Hello, this is a test string");
```

## CLI

Install:

```bash
$ npm install -g @hendrikprinsza/basic-tts-player
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
