const base = require('./databaseObject');
const i = require('@ku3mich/injectable');
const s = require('./symbols');
<<<<<<< HEAD

//descendats should expose 'forward' and 'backward' methods as well as static Order
=======
>>>>>>> e2eb7f2c0afbddcba3cc9c6cc42eccffedafb223

//descendats should expose 'forward' and 'bacward' methods as well as static Order

class Step extends base {
  constructor(opts){
    super(opts);
  }
}

<<<<<<< HEAD
module.expose(Step)
  .abstractClass()
  .tagged(s.Step);
=======
Step[i.Inject] = i.globalClass(module).tagged(s.Step);
Step.Order = 0;
>>>>>>> e2eb7f2c0afbddcba3cc9c6cc42eccffedafb223

