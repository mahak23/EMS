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

      size: 50,
    },
    email: {
      type: "string",

      size: 100,
    },
    phoneNo: {
      type: "string",

      size: 50,
    },
    roleId: {
      type: "integer",
    },
    dateOfJoining: {
      type: "date",
    },
    dateOfBirth: {
      type: "date",
    },
    imagePath: {
      type: "string",

      size: 100,
    },
    address: {
      type: "string",

      size: 200,
    },
    password: {
      type: "string",

      size: 50,
    },
    degination: {
      type: "string",
    },
    managerId: {
      type: "integer",

      defaultsTo: null,
    },
    googleProviderId: {
      type: "string",
    },
    facebookProvideId: {
      type: "string",
    },
    status: {
      type: "integer",
      defaultsTo: 1,
    },
    isDeleted: {
      type: "integer",
      defaultsTo: 0,
    },
  },

  connection: "postgres",
};
