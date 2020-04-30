/**
 * isAdmin
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */

module.exports = async (req, res, next) => {
  let user = req.user;
  console.log(user);
  if (user.roleId == 1) {
    return next();
  }
  return res.forbidden({ error: "unauthorized access" });
};
