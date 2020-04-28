let bcrypt = require("bcrypt");
module.exports = {
  create: function (req, res) {
    let user_email = req.body.email;
    let pwd = req.body.password;

    User.findOne({ email: user_email })
      .then((user) => {
        bcrypt.compare(pwd, user.password, function (err, result) {
          console.log(result);
          if (result) {
            var responseData = {
              user: user,
              token: JwtService.issue({ id: user.id }),
            };

            if (responseData) {
              return res
                .status(200)
                .json({ data: responseData, msg: "login successfully" });
            }
          } else {
            return res.status(400).json({ msg: "Invalid username password" });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ err: "User not found!" });
      });
  },
};
