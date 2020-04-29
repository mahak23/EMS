module.exports = async (req, res, next) => {
  console.log("in admin policy");
  let user = req.user;
  if (user.roleId == 1) {
    next();
  }
  return res.status(403).json({ error: "unauthorized access" });
};
