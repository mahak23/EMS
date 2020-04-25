/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'integer',
      primaryKey: true,
      required: true,
      autoIncrement: true,
      columnName: 'id'
    },
    name: {
      type: 'string',
      allowNull: false,
      columnName: 'name'
    },
    email: {
      type: 'string',
      allowNull: false,
      columnName: 'email'
    },
    phone_no: {
      type: 'integer',
      allowNull: false,
      columnName: 'phone_no'
    },
    role_id: {
      type: 'integer',
      allowNull: false,
      columnName: 'role_id'
    },
    date_of_joining: {
      type: 'date',
      allowNull: false,
      columnName: 'date_of_joining'
    },
    date_of_birth: {
      type: 'date',
      allowNull: false,
      columnName: 'date_of_birth'
    },
    image_path:{
      type: 'string',
      allowNull: false,
      columnName: 'image_path'

    },
    address: {
      type: 'string',
      allowNull: false,
      columnName: 'address'
    },
    password: {
      type: 'string',
      allowNull: false,
      columnName: 'password',


    },
    degination: {
      type: 'string',
      allowNull: false,
      columnName: 'degination'
    },
    google_provider_id: {
      type: 'string',
      allowNull: false,
      columnName: 'google_provider_id'
    },
    facebook_provide_id: {
      type: 'string',
      allowNull: false,
      columnName: 'facebook_provide_id'
    },
    status: {
      type:'integer',
      allowNull: false,
      columnName: 'status'
    },
    created_at: {
      type: 'datetime',
      allowNull: false,
      columnName: 'created_at'
    },
    updated_at: {
      type: 'datetime',
      allowNull: false,
      columnName: 'updated_at'
    },
    is_deleted: {
      type: 'boolean',
      allowNull: false,
      columnName: 'is_deleted'
    }


  },

  connection:'postgres'
};

