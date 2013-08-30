// Require
var requirejs = require('requirejs');
var fs = require('fs');
var path = require('path');
var pjson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json")));

// Configure RequireJS
var config = {
  baseUrl: "src/",
  paths: {
    "Leap": "../node_modules/leapjs/leap"
  },
  optimize: "none",
  onBuildRead: function(id, url, contents) {
    if (id === 'Leap') {
        return 'define(\'Leap\', [], function() {var define;\n ' + contents + ' return Leap; });';
    } else {
        return contents;
    }
  },
  logLevel: 0,
  name: "issue", // Name of script to start building from
  insertRequire: ["issue"],
  out: 'build/' + pjson.name + '-' + pjson.version + '.min.js' // Where to output
};

// Optimize our script
requirejs.optimize(config, function(buildResponse) {
  var contents = fs.readFileSync(config.out, 'utf-8');
});