const i = require('@ku3mich/injectable');
const s = require('../lib/symbols');
const fs = require('fs');

describe('fileAdpater', function () {
  before( () => {
    const locator = new i.Locator(__dirname);
    this.container = new i.Container(locator);
    this.container.register({
      [s.adapterConfig] : {
        stateFile : './test.state'
      }
    });

    this.container.registerPart('fileAdapter.js');
    this.resolve = f => locator.resolver.resolve(f);
  });

  beforeEach(
    () => this.adapter = this.container.resolve('/fileAdapter'));

  it('initState', () => {
    this.adapter.initState();
    this.adapter.state.should.be.eql([]);
  });

  it('saveState', () => {
    const adapter = this.adapter;

    adapter.initState();
    adapter.saveState();
    expect(fs.existsSync(this.resolve('./test.state').get())).to.be.true;
  });
  
  it('add step', () => {
    const adapter = this.adapter;
    adapter.initState();
    adapter.addStep(1);
  });

  it('applied steps', () => {
    const adapter = this.adapter;
    
    adapter.initState();
    adapter.addStep(5);
    adapter.addStep(6);
    
    this.adapter.getAppliedSteps().should.be.eql([5,6]);
  });
  
  it('remove not existent step', () => {
    this.adapter.initState();
    assert.throws(
      () => this.adapter.removeStep(1));
  });

  it('getStepIndex',  () => {
    const adapter = this.adapter;
    adapter.initState();
    adapter.addStep(7);
    adapter.addStep(3);
    adapter.addStep(2);

    const result = adapter.getStepIndex(3);
    expect(result).to.be.equal(1);
  });
  
  it('remove step', () => {
    const adapter = this.adapter;
    adapter.initState();
    adapter.addStep(5);
    adapter.addStep(6);
    adapter.addStep(7);

    adapter.removeStep(5);

    adapter.getAppliedSteps().should.be.eql([6,7]);
  });
  
  it('add duplicate step', () => {
    this.adapter.initState();
    this.adapter.addStep(1);
    assert.throws( () =>
                   this.adapter.addStep(1));
  });

  it('save restore', () => {
    this.adapter.initState();
    this.adapter.addStep(1);
    this.adapter.addStep(2);
    this.adapter.saveState();
    this.adapter.restoreState();
    this.adapter.state.should.be.eql([1, 2]);
  });
  
});
