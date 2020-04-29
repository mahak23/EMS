let jwt = require("jsonwebtoken");
let jwtSecret = sails.config.secrets.jwtSecret;

module.exports = {
  issue: (payload) => {
    let token = jwt.sign(payload, jwtSecret, { expiresIn: 180 * 60 });
    return token;
  },

  verify: (token) => {
    return jwt.verify(token, jwtSecret);
  },
};
