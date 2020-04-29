let bcrypt = require("bcrypt");
module.exports = {
  login: async (req, res) => {
    try {
      let user_email = req.body.email;
      let pwd = req.body.password;

      let user = await User.findOne({ email: user_email, isDeleted: 0 });
      if (!user) {
        throw new Error("User not found!");
      }
      let match = await bcrypt.compare(pwd, user.password);
      if (!match) {
        throw new Error("Invalid credentials");
      }

      var responseData = {
        user: user,
        token: JwtService.issue({ id: user.id }),
      };

      return res
        .status(200)
        .json({ data: responseData, msg: "login successfully" });
    } catch (err) {
      console.log(err);
      return res.badRequest(err);
    }
  },
};
