let bcrypt = require("bcrypt");
module.exports = {
  login: async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email, isDeleted: 0 });
      if (!user) {
        throw new Error("User not found!");
      }

      let match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        throw new Error("Invalid credentials!");
      }

      let responseData = {
        user: user,
        token: JwtService.issue({ id: user.id }),
      };

      return res.ok({ data: responseData, msg: "login successfully" });
    } catch (err) {
      return res.badRequest(err);
    }
  },
};
