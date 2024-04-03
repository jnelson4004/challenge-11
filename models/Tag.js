const { Model, DataTypes } = require('sequelize');
const category = require("../category.js")
const sequelize = require('../config/connection.js');
const { INTEGER } = require('sequelize');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: String,
    },
  },
);

module.exports = Tag;
