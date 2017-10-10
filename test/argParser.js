const parser = require('../lib/argparser');

describe('argument parser', function () {
  it('parses forward', () =>{
    const args = parser(['-f']);

    args.should.have.property('forward')
      .which.eql([]);
    
    args.should.have.property('backward')
      .which.eql(null);
  });
  
  it('parses backward', () =>{
    const args = parser(['-b']);
    args.should.have.property('backward')
      .which.eql([]);
    
    args.should.have.property('forward')
      .which.eql(null);
  });
  
  it('parses step', () =>{
    const check = args => {
      args.should.have.property('step')
        .which.eql(10);
    };
    
    check(parser(['-s', '10']));
    check(parser(['-s10']));
    check(parser(['--step', '10']));
  });
});
