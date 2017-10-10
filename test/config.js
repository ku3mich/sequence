const Config = require('../lib/config.js');
const path = require('path');

describe('config', function () {
  it('parses', () => {
    const config = new Config(
      ['-f', '--step', 10],
      path.join(__dirname, 'env'));
    
    const options = config.read();

    assert(options, 'options != null');

    options.config.adapter.type
      .should.eql('couchdb');

    options.args
      .should.have.property('step', 10);

    options.args
      .should.have.property('forward', []);

    options.args
      .should.have.property('backward', null);

    // from .rc
    options.args
      .should.have.property('verbose', []);
  });
});
