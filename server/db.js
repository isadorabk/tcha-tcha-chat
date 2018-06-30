const Sequelize = require('sequelize');

const dbName = 'dbtchatchachat';
const dbUser = 'root';
const dbPassword = 'password';
const hostName = '127.0.0.1';
const dbPort = 3306;

const connection = new Sequelize(dbName, dbUser, dbPassword, {
  host: hostName,
  port: dbPort,
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection with database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;