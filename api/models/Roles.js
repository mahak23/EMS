/**
 * Roles.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: "integer",
      primaryKey: true,
      required: true,
      autoIncrement: true,
      columnName: "id",
    },
    title: {
      type: "string",
      size: 10,
    },

    is_deleted: {
      type: "integer",
    },
  },
  connection: "postgres",
};
