/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
let bcrypt = require("bcrypt");

module.exports = {
  // Lifecycle Callbacks
  beforeCreate: function (values, cb) {
    // Hash password
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.password = hash;
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  },
  attributes: {
    id: {
      type: "integer",
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: "string",
      allowNull: false,
      size: 50,
    },
    email: {
      type: "string",
      allowNull: false,
      size: 100,
    },
    phoneNo: {
      type: "string",
      allowNull: false,
      size: 50,
    },
    roleId: {
      type: "integer",
      allowNull: false,
    },
    dateOfJoining: {
      type: "date",
      allowNull: false,
    },
    dateOfBirth: {
      type: "date",
      allowNull: false,
    },
    imagePath: {
      type: "string",
      allowNull: false,
      size: 100,
    },
    address: {
      type: "string",
      allowNull: false,
      size: 200,
    },
    password: {
      type: "string",
      allowNull: false,
      size: 50,
    },
    degination: {
      type: "string",
      allowNull: false,
    },
    manager_id: {
      type: "integer",
      allowNull: true,
      defaultsTo: null,
    },
    googleProviderId: {
      type: "string",
      allowNull: false,
    },
    facebookProvideId: {
      type: "string",
      allowNull: false,
    },
    status: {
      type: "integer",
      allowNull: false,
    },
    isDeleted: {
      type: "boolean",
      allowNull: false,
    },
  },

  connection: "postgres",
};
