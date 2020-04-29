/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //for record listing
  list: async (req, res) => {
    try {
      let users = await User.find({ roleId: 2, isDeleted: 0 });
      return res.status(200).json({ users: users });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  show: async (req, res) => {
    try {
      let user = await User.findOne({
        id: req.params.id,
        roleId: 2,
        isDeleted: 0,
      });
      if (user) {
        return res.status(200).json({ user: user });
      }
      return res.badRequest(new Error("Manager does not exist"));
    } catch (err) {
      return res.badRequest(err);
    }
  },

  //for insert record
  add: async (req, res) => {
    try {
      let data = {
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        dateOfJoining: req.body.dateOfJoining,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        password: req.body.password,
        degination: req.body.degination,
      };
      data.roleId = 2;

      await User.create(data);

      return res.status(200).json({ msg: "Manager added successfully" });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  //for delete record
  delete: async (req, res) => {
    try {
      let user = await User.findOne({
        id: req.params.id,
        roleId: 2,
        isDeleted: 0,
      });

      if (!user) {
        throw new Error("Manager does not exist");
      }
      await User.destroy({ id: req.params.id });

      return res.status(200).json({ msg: "Manager deleted successfully" });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  //for update record
  edit: async (req, res) => {
    try {
      let user = await User.findOne({
        id: req.params.id,
        isDeleted: 0,
        roleId: 2,
      });
      if (!user) {
        throw new Error("Manager does not exist");
      }
      let data = {
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        dateOfJoining: req.body.dateOfJoining,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        degination: req.body.degination,
      };
      await User.update({ id: req.params.id }, data);

      return res.status(200).json({ msg: "Manager updated successfully!" });
    } catch (err) {
      return res.badRequest(err);
    }
  },
};
