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
  shim: {
    "Leap": {
      exports: "Leap"
    }
  },
  optimize: "none",
  name: "issue", // Name of script to start building from
  insertRequire: ["issue"],
  out: 'build/' + pjson.name + '-' + pjson.version + '.min.js' // Where to output
};

// Optimize our script
requirejs.optimize(config, function(buildResponse) {
  var contents = fs.readFileSync(config.out, 'utf-8');
});