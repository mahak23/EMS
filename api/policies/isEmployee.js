module.exports = async (req, res, next) => {
  let user = req.user;
  if (user.roleId == 3) {
    return next();
  }
  return res.forbidden({ error: "unauthorized access" });
};
