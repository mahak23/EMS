/**
 * isAuthorized
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */

module.exports = async (req, res, next) => {
  let token;
  //Check if authorization header is present
  if (req.headers && req.headers.authorization) {
    //authorization header is present
    let parts = req.headers.authorization.split(" ");
    if (parts.length == 2) {
      let scheme = parts[0];
      let credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
    } else {
      return res.json(401, { err: "Format is Authorization: Bearer [token]" });
    }
  } else {
    //authorization header is not present
    return res.json(401, { err: "No Authorization header was found" });
  }
  try {
    let decoded = JwtService.verify(token);
    let user = await User.findOne({ id: decoded.id });
    if (!user) {
      throw new Error("invalid token");
    }

    req.user = user;

    return next();
  } catch (err) {
    return res.json(401, { error: "Invalid token" });
  }
};
