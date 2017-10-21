const i = require('@ku3mich/injectable');
const seq = require('../index');
const SequenceError = seq.SequenceError;
const fs = require('fs');

class FileAdapter extends i.Injectable {
  constructor(opts){
    super(opts);
    this.stateFile = this.locator.resolver.resolve(this.config.stateFile).get();
  }

  initState() {
    this.state = [];
  }
  
  getAppliedSteps(){
    return this.state;
  }
  
  getStepIndex(step){
    return this.state.indexOf(step);
  }
  
  addStep(step) {
    if (this.getStepIndex(step) > -1)
      throw new SequenceError(`Step ${step} is already applied`);

    this.state.push(step);
  }

  removeStep(step) {
    const stepIndex = this.getStepIndex(step);
    if (stepIndex==-1)
      throw new SequenceError(`Step ${step} is not applied`);

    this.state.splice(stepIndex, 1);
  }

  saveState() {
    fs.writeFileSync(this.stateFile, JSON.stringify(this.state));
  }

  restoreState() {
    this.state = JSON.parse(fs.readFileSync(this.stateFile, 'utf-8'));
  }
}

module.expose(FileAdapter)
  .transientClass({
    locator : i.symbols.locatorInstance,
    config : seq.symbols.adapterConfig
  });
