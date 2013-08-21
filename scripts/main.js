// Configure RequireJS
require.config({
  baseUrl: "src/",
  paths: {
    "Leap": "../node_modules/leapjs/leap"
  },
  shim: {
    "Leap": {
      exports: "Leap"
    }
  }
});

// Start the main app logic.
require(["issue"],
  function (issue) {
});