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
      minLength: 3,
      maxLength: 10,
      required: true,
    },
    email: {
      type: "string",
      size: 100,
      email: true,
      required: true,
    },
    phoneNo: {
      type: "string",
      size: 50,
      maxLength: 10,
      required: true,
    },
    roleId: {
      type: "integer",
    },
    dateOfJoining: {
      type: "string",
      required: true,
    },
    dateOfBirth: {
      type: "string",
      required: true,
    },
    imagePath: {
      type: "string",

      size: 150,
    },
    address: {
      type: "string",
      required: true,
      minLength: 2,
      maxLength: 1000,
      size: 2000,
    },
    password: {
      type: "string",
      required: true,
      minLength: 5,
      size: 120,
    },
    designation: {
      type: "string",
      required: true,
      minLength: 2,

      maxLength: 50,
    },
    managerId: {
      type: "integer",
    },
    googleProviderId: {
      type: "string",
      defaultsTo: null,
    },
    facebookProvideId: {
      type: "string",
      defaultsTo: null,
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
