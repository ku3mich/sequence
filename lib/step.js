const i = require('@ku3mich/injectable');

class Step extends i.Injectable {
  constructor(opts){
    super(opts);
  }
}

Step.Order = 0;

Step[i.Inject] = i.globalClass(module, {
  db : 'Database',
  connection : 'Connection'
});
