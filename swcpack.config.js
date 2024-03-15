const { config } = require("@swc/core/spack");

module.exports = config({
  output: {
    path: __dirname + "/lib",
    // Name is optional.
    name: "index.js",
  },
});