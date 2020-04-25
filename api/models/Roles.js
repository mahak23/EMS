/**
 * Roles.js
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
    title: {
      type: 'string',
      allowNull: false,
      columnName: 'title'
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

