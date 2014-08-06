var should = require('should'),
    Rapp   = require('../');

describe('RAPP', function () {
  var rapp = Rapp(__dirname + '/main');

  it('should have set ROOT to __dirname/main', function () {
    rapp.getRoot().should.equal(__dirname + '/main');
  });

  it('should change ROOT to __dirname', function () {
    rapp.setRoot(__dirname);
    rapp.getRoot().should.equal(__dirname);
  });

  it('should import file based on __dirname', function () {
    var test = rapp('test');
    test.should.equal('test');
  });
});
