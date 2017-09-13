#!/usr/bin/env node

const parseArgs = require('../src/arg-parser.js');
const findroot=require('find-root');

const configRoot = findroot(process.cwd());
const fs = require('fs');
const path = require('path');

const passedArgs = process.argv.slice(2);
const seqrc = '.seq.rc';
const defaultConfigFile = 'sequence.json';

const rcfile = path.join(configRoot, seqrc);

if (fs.existsSync(rcfile)){
  const opts = fs.readFileSync(rcfile, 'UTF-8');
  const optsSplit = opts.replace(/\n/g, '').split(' ');
  Array.prototype.push.apply(passedArgs, optsSplit);
}

const args = parseArgs(passedArgs);

if (!(args.forward || args.backward)){
  parseArgs(['-h']);
}

const configFile = args.config || path.join(configRoot, defaultConfigFile);
let config;

try {
  if (!fs.existsSync(configFile))
    throw `config file does not exist`;
  config = require(configFile);
}
catch (e){
  const err =`*** can not read config file: ${configFile}\n*** due: ${e.message || e}`;
  throw err;
}

console.log(config);
console.log(args);

