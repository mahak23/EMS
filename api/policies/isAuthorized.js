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
    console.log("in auth policy");
    req.user = user;

    next();
  } catch (err) {
    return res.json(401, { error: "Invalid token" });
  }
};
