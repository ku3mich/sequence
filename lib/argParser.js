const argparse = require('argparse');
//const consts = argparse.Const;
const ArgumentParser = argparse.ArgumentParser;
const packageJson = require('../package.json');

const parser = new ArgumentParser({
  version : packageJson.version,
  addHelp : true,
  description : 'Sequence: command line migration runner',
});


const commands = parser.addMutuallyExclusiveGroup({ required : false });

parser.addArgument(['-d', '--verbose'], { nargs : 0, help : 'more details' });
parser.addArgument(['-c', '--config'], { help : 'config file' });

commands.addArgument(['-f', '--forward'], { nargs : 0, help : 'process forward up to last or up to --step' });
commands.addArgument(['-b', '--backward'], { nargs : 0, help : 'process backward up to --step or very begining' });
commands.addArgument(['-i', '--init'], { nargs : 0, help : 'create config, sequence dir, initial step' });
commands.addArgument(['-a', '--add'], { nargs : 0, help : 'create new step' });
parser.addArgument(['-t', '--adapter'], { help : 'adapter to use(valid only for init)' });
parser.addArgument(['-s', '--step'], { help : 'target step', type : 'int' });

//console.log(Object.keys(consts));
/*

[ 'EOL',
  'SUPPRESS',
  'OPTIONAL',
  'ZERO_OR_MORE',
  'ONE_OR_MORE',
  'PARSER',
  'REMAINDER',
  '_UNRECOGNIZED_ARGS_ATTR' ]

*/
module.exports = function(args){
  return parser.parseArgs(args);
};
