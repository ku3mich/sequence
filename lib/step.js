const base = require('./databaseObject');
const i = require('@ku3mich/injectable');
const s = require('./symbols');

//descendats should expose 'forward' and 'bacward' methods as well as static Order

class Step extends base {
  constructor(opts){
    super(opts);
  }
}

Step[i.Inject] = i.globalClass(module).tagged(s.Step);
Step.Order = 0;

