'use strict';

const models = require('../models/models-messages.js');

exports.getAll = ctx => {
  ctx.body = models.getAll();
};

exports.addToDb = ctx => {
  models.addToDb(ctx.request.body);
  ctx.status = 200;
};