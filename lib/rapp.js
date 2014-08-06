var dbg  = require('debug')('rapp:log'),
    fs   = require('fs'),
    path = require('path');

function Require(root) {
  dbg('create new Require instance with root: ' + root);
  this.setRoot(root);
}

Require.prototype.require = function (modulePath) {
  var file = path.join(this.root, modulePath);
  dbg('trying to get file: ' + file);

  return require(file);
}

Require.prototype.setRoot = function (dir) {
  dbg('set root to: ' + dir);
  this.root = path.resolve(dir);
};

Require.prototype.getRoot = function (dir) {
  return this.root;
};

module.exports = function (root) {
  var r = new Require(root),
      f = function (file) {
        return r.require(file);
      };

  f.setRoot = function (root) {
    r.setRoot(root);
  };

  f.getRoot = function () {
    return r.getRoot();
  };
  return f;
};
