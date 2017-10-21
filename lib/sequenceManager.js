const i = require('@ku3mich/injectable');

class SequenceManager extends i.Injecatble {
  constructor(opts){
    super(opts);

    //this.avaiableSteps = 
  }

  
  execute(step) {
  }
  
  run(step){
    const applied = this.adapter.getAppliedSteps();
  }
}


module.expose(SequenceManager)
  .abstractClass({
  })
  .tagged('');

