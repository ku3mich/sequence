// const
const seqrc = '.seq.rc';
const defaultConfigFile = 'sequence.json';

// modules
const fs = require('fs');
const path = require('path');
const SequenceError = require('./sequenceError.js');
const parseArgs = require('./argParser.js');
const b = require('@ku3mich/base');

class Config extends b.Object {
  constructor(args, configRoot){
    super();

    this.passedArgs = args; 
    this.configRoot = configRoot;
    this.rcfile = path.join(this.configRoot, seqrc);
    
    if (fs.existsSync(this.rcfile)){
      const opts = fs.readFileSync(this.rcfile, 'UTF-8');
      const optsSplit = opts.replace(/\n/g, '').split(' ');
      Array.prototype.push.apply(this.passedArgs, optsSplit);
    }
  }

  read(){
    const args = parseArgs(this.passedArgs);
    const configFile = args.config || path.join(this.configRoot, defaultConfigFile);

    let config;
    
    if (!fs.existsSync(configFile))
      throw `config file does not exist`;
    else{
      try {
        config = require(configFile);
      }
      catch(e){
        throw new SequenceError(`*** can not read config file: ${configFile}\n*** due: ${e.message || e}`);
      }
    }
    
    return {
      args,
      config 
    };
  }
}

module.exports = Config;
