'use strict';
const { Model } = require('sequelize');
const DEPENDENT = require('../../enums/dependents');
module.exports = (sequelize, DataTypes) => {
  class Dependent extends Model {
    static associations(models) {
      // define association here
    }
  }
  Dependent.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      /**
       * @riaddaima
       * Maybe add this into user model too.
       */
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM(DEPENDENT.SPOUSE, DEPENDENT.KID),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Dependent',
    tableName: 'dependent',
    timestamps: true
  })
  return Dependent;
};