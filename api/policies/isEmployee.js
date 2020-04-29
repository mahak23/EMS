module.exports = async (req, res, next) => {
  let user = req.user;
  if (user.roleId == 3) {
    next();
  }
  return res.status(403).json({ error: "unauthorized access" });
};
