'use strict';

const Sequelize = require('sequelize');
const connection = require('../db.js');

const Messages = connection.define('messages', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user: Sequelize.STRING(50),
  message: Sequelize.TEXT(),
  time: Sequelize.INTEGER,
});

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    Messages
      .findAll()
      .then((data) => {
        resolve(data);
      });
  });
};

exports.addToDb = (msg) => {
  Messages
    .sync()
    .then(() => {
      Messages.create({
        user: msg.user,
        message: msg.message,
        time: msg.time
      });
    });
};