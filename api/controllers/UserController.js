/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //for record listing
  list: function (req, res) {
    User.find({}).exec((err, users) => {
      if (err) {
        res.send(500, { error: "database error" });
      }
      return res.send({ users: users });
    });
  },

  //for insert record
  add: function (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let phone_no = req.body.phone_no;
    let role_id = req.body.role_id;
    let date_of_joining = req.body.date_of_joining;
    let date_of_birth = req.body.date_of_birth;
    let image_path = req.body.image_path;
    let address = req.body.address;
    let password = req.body.password;
    let degination = req.body.degination;
    let google_provider_id = req.body.google_provider_id;
    let facebook_provide_id = req.body.facebook_provide_id;
    let status = req.body.status;
    let created_at = req.body.created_at;
    let updated_at = req.body.updated_at;
    let is_deleted = req.body.is_deleted;

    User.create({
      name: name,
      email: email,
      phone_no: phone_no,
      role_id: role_id,
      date_of_joining: date_of_joining,
      date_of_birth: date_of_birth,
      image_path: image_path,
      address: address,
      password: password,
      degination: degination,
      google_provider_id: google_provider_id,
      facebook_provide_id: facebook_provide_id,
      status: status,
      created_at: created_at,
      updated_at: updated_at,
      is_deleted: is_deleted,
    }).exec((err) => {
      if (err) {
        res.send(500, { error: "database error" });
      } else {
        return res.send("Record added successfully");
      }
    });
  },

  //for delete record
  delete: function (req, res) {
    User.delete({ id: req.params.id }).exec((err) => {
      if (err) {
        res.send(500, { error: "database error" });
      } else {
        return res.send("Record deleted successfully");
      }
    });
  },

  //for update record
  edit: function (req, res) {
    User.findOne({ id: req.params.id }).exec((err, user) => {
      if (err) {
        res.send(500, { error: "database error" });
      }
    });
    let name = req.body.name;
    let email = req.body.email;
    let phone_no = req.body.phone_no;
    let role_id = req.body.role_id;
    let date_of_joining = req.body.date_of_joining;
    let date_of_birth = req.body.date_of_birth;
    let image_path = req.body.image_path;
    let address = req.body.address;
    let password = req.body.password;
    let degination = req.body.degination;
    let google_provider_id = req.body.google_provider_id;
    let facebook_provide_id = req.body.facebook_provide_id;
    let status = req.body.status;
    let created_at = req.body.created_at;
    let updated_at = req.body.updated_at;
    let is_deleted = req.body.is_deleted;

    User.update(
      { id: req.params.id },
      {
        name: name,
        email: email,
        phone_no: phone_no,
        role_id: role_id,
        date_of_joining: date_of_joining,
        date_of_birth: date_of_birth,
        image_path: image_path,
        address: address,
        password: password,
        degination: degination,
        google_provider_id: google_provider_id,
        facebook_provide_id: facebook_provide_id,
        status: status,
        created_at: created_at,
        updated_at: updated_at,
        is_deleted: is_deleted,
      }
    ).exec((err) => {
      if (err) {
        res.send(500, { error: "database error" });
      } else {
        return res.send("Record updated successfully");
      }
    });
  },
};
