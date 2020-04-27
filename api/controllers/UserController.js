/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //for record listing
  list: (req, res) => {
    User.find({}).exec((err, users) => {
      if (err) {
        return res.status(500).json({ error: "Something went wrong!" });
      }
      return res.status(200).json({ users: users });
    });
  },

  show: (req, res) => {
    User.findOne({ id: req.params.id }).exec((err, user) => {
      if (err) {
        return res.status(500).json({ error: "Something went wrong!" });
      }
      return res.status(200).json({ user: user });
    });
  },

  //for insert record
  add: (req, res) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      roleId: req.body.roleId,
      dateOfJoining: req.body.dateOfJoining,
      dateOfBirth: req.body.dateOfBirth,
      imagePath: req.body.imagePath,
      address: req.body.address,
      password: req.body.password,
      degination: req.body.degination,
    }).exec((err) => {
      if (err) {
        return res.status(500).json({ error: "Something went wrong!" });
      } else {
        return res.status(200).json({ msg: "Manager added successfully" });
      }
    });
  },

  //for delete record
  delete: (req, res) => {
    User.destroy({ id: req.params.id }).exec((err) => {
      if (err) {
        return res.status(500).json({ error: "Something went wrong!" });
      } else {
        return res.status(200).json({ msg: "Record deleted successfully" });
      }
    });
  },

  //for update record
  edit: (req, res) => {
    User.findOne({ id: req.params.id }).exec((err, user) => {
      if (err) {
        return res.status(500).json({ error: "Something went wrong!" });
      }
    });
    console.log(req.body);
    User.update(
      { id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        roleId: req.body.roleId,
        dateOfJoining: req.body.dateOfJoining,
        dateOfBirth: req.body.dateOfBirth,
        imagePath: req.body.imagePath,
        address: req.body.address,
        password: req.body.password,
        degination: req.body.degination,
      }
    ).exec((err) => {
      console.log(err);
      if (err) {
        return res.status(500).json({ error: "Something went wrong!" });
      } else {
        return res.status(200).json({ msg: "Record updated successfully" });
      }
    });
  },
};
