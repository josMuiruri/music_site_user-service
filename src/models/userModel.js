const { Model, DataTypes} = require('sequelize');
const { Sequelize } = require('./../config/db');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
    },

    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
 }, {
        sequelize,
        modelName: 'User_Profile',
        tableName: 'user_profiles'
    });