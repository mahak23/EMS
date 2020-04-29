/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const path = require("path");
let fs = require("fs");
module.exports = {
  //for record listing
  list: async (req, res) => {
    try {
      let users = await User.find({ roleId: 3, isDeleted: 0 });
      return res.status(200).json({ users: users });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  show: async (req, res) => {
    try {
      let user = await User.findOne({
        id: req.params.id,
        roleId: 3,
        isDeleted: 0,
      });
      if (user) {
        return res.status(200).json({ user: user });
      }
      return res.badRequest(new Error("Employee does not exist"));
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
      let imageDir = path.resolve(sails.config.appPath, "assets/images");

      req
        .file("imagePath")
        .upload({ dirname: imageDir }, async (err, files) => {
          let fileName = files.filename;
          if (err) {
            throw err;
          }

          data.roleId = 3;
          data.managerId = req.user.id;
          data.imagePath = fileName;
          await User.create(data);

          return res.status(200).json({ msg: "Employee added successfully" });
        });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  //for delete record
  delete: async (req, res) => {
    try {
      let user = await User.findOne({
        id: req.params.id,
        roleId: 3,
        isDeleted: 0,
      });

      if (!user) {
        throw new Error("Employee does not exist");
      }
      await User.destroy({ id: req.params.id });

      return res.status(200).json({ msg: "Employee deleted successfully" });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  //for update record
  edit: async (req, res) => {
    try {
      let user = await User.findOne({
        id: req.params.id,
        roleId: 3,
        isDeleted: 0,
      });
      if (!user) {
        throw new Error("Employee does not exist");
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
      let imageDir = path.resolve(sails.config.appPath, "assets/images");

      req
        .file("imagePath")
        .upload({ dirname: imageDir }, async (err, files) => {
          let fileName = files.filename;
          if (err) {
            throw err;
          }
          let oldFile = `${imageDir}/${user.imagePath}`;
          if (fs.existsSync(oldFile)) {
            fs.unlinkSync(oldFile);
          }

          data.managerId = req.user.id;
          data.imagePath = fileName;
          await User.update({ id: req.params.id }, data);
        });
      return res.status(200).json({ msg: "Employee updated successfully!" });
    } catch (err) {
      return res.badRequest(err);
    }
  },
};
