require('dotenv').config();

function deploy () {
  return process.env.DEPLOY === "true";
}

module.exports = deploy;