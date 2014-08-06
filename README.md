RAPP - RequireApp
====

require method for app based on custom ROOT

Example
-

```
  var rapp = require('rapp')('./app');

  var User = rapp('models/index');

  rapp.setRoot(__dirname);
  console.log(rapp.getRoot());
```
