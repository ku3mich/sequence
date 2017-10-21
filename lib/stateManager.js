const base = require('@ku3mich/base');
const i = require('@ku3mich/injectable');
//const NotImplementedError = base.NotImplementedError;
const symbols = require('./symbols');

class StateManager extends i.Injectable {
  constructor(opts){
    super(opts);
  }
}

module.expose(StateManager)
  .globalClass({
    adapter : [symbols.adapter],
    locator : [i.symbols.LocatorInstance]
  });
