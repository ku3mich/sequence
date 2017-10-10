#!/usr/bin/env node
const Config = require('../lib/config.js');
const findroot = require('find-root');

const config = new Config(process.argv.slice(2), findroot(process.cwd()));

const options = config.read();
console.log(options);
