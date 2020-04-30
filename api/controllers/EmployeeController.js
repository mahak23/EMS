/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const path = require("path");
const fs = require("fs");

module.exports = {
  //for record listing
  list: async (req, res) => {
    try {
      let users = await User.find({ roleId: 3, isDeleted: 0 });
      return res.ok({ users: users });
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
        return ok({ user: user });
      }
      return res.badRequest(new Error("Employee does not exist"));
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

      console.log(req.body);
      let imageDir = path.resolve(sails.config.appPath, "assets/images");

      req
        .file("imagePath")
        .upload({ dirname: imageDir }, async (err, files) => {
          let fileName = files[0].filename;
          if (err) {
            throw err;
          }

          data.roleId = 3;
          data.managerId = req.user.id;
          data.imagePath = fileName;
          console.log(data);
          await User.create(data);

          return res.ok({ msg: "Employee added successfully" });
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

      return res.ok({ msg: "Employee deleted successfully" });
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
      console.log(req.body);
      let imageDir = path.resolve(sails.config.appPath, "assets/images");

      req
        .file("imagePath")
        .upload({ dirname: imageDir }, async (err, files) => {
          let fileName = files[0].filename;

          if (err) {
            throw err;
          }
          let oldFile = `${imageDir}/${user.imagePath}`;
          if (fs.existsSync(oldFile)) {
            fs.unlinkSync(oldFile);
          }
          console.log(data);
          data.managerId = req.user.id;
          data.imagePath = fileName;
          await User.update({ id: req.params.id }, data);
          return res.ok({ msg: "Employee updated successfully!" });
        });
    } catch (err) {
      return res.badRequest(err);
    }
  },
};
