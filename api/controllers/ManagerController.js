/**
 * ManagerController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //for record listing
  list: async (req, res) => {
    try {
      let users = await User.find({ roleId: 2, isDeleted: 0 });
      return res.ok({ users: users });
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
        return res.ok({ user: user });
      }
      return res.badRequest(new Error("Manager does not exist"));
    } catch (err) {
      return res.badRequest(err);
    }
  },

  //for insert record
  add: async (req, res) => {
    try {
      let user = await User.findOne({
        email: req.body.email,
        isDeleted: 0,
      });

      if (user) {
        throw new Error("Email already exist");
      }

      let data = {
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        dateOfJoining: req.body.dateOfJoining,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        password: req.body.password,
        designation: req.body.designation,
      };
      data.roleId = 2;

      await User.create(data);

      return res.ok({ msg: "Manager added successfully" });
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

      return res.ok({ msg: "Manager deleted successfully" });
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
      let userEmail = await User.findOne({
        email: req.body.email,
        id: { "!": req.params.id },
        isDeleted: 0,
      });
      if (userEmail) {
        throw new Error("Email already exist");
      }

      let data = {
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        dateOfJoining: req.body.dateOfJoining,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        designation: req.body.designation,
      };
      await User.update({ id: req.params.id }, data);

      return res.ok({ msg: "Manager updated successfully!" });
    } catch (err) {
      return res.badRequest(err);
    }
  },
};
