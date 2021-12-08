if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else if (process.env.NODE_ENV === "test") {
  module.exports = require("./keys_test");
} else {
  console.log(process.env.NODE_ENV, "hiii");
  module.exports = require("./keys_prod");
}
