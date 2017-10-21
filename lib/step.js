const i = require('@ku3mich/injectable');
const s = require('./symbols');

//descendats should expose 'forward' and 'backward' methods as well as static Order

class Step extends i.Injectable {
  constructor(opts){
    super(opts);
  }
}

module.expose(Step)
  .abstractClass()
  .tagged(s.Step);

