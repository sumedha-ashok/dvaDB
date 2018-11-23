const uuid = require('uuid/v4');
'use strict';
// var models = require('../models');
module.exports = (sequelize, DataTypes) => {
    var Aspect = sequelize.define('Aspect', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        noun: DataTypes.TEXT,
        adjective: DataTypes.TEXT,
        polarity: DataTypes.FLOAT
    });

    return Aspect;
};
