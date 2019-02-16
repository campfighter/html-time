require('dotenv').config();

function pass () {
  return process.env.PASS === "true";
}

module.exports = pass;