const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_URI,
  {
    logging: console.log,
  }
);

module.exports = sequelize;