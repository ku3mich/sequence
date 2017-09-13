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
parser.addArgument(['-c', '--config'], { help : 'json config file(see samples) if not specified find-root used' });

commands.addArgument(['-f', '--forward'], { nargs : 0, help : 'process forward up to last or up to --step' });
commands.addArgument(['-b', '--backward'], { nargs : 0, help : 'process backward up to --step or very begining' });

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
