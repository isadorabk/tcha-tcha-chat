'use strict';

const Router = require('koa-router');
const router = new Router();
const fs = require('fs');

const config = require('./config.js');
const controllers = require('./controllers/controllers-messages.js');

let _404;

fs.readFile(config.clientPath + '/404.html', 'utf8', (err, data) => {
  if (err) _404 = 'The requested URL was not found on this server.';
  else _404 = data;
});

router.get('/messages', controllers.getAll);
router.post('/messages', controllers.addToDb);
router.get('/*', () => {
  // Catchall for not found
  this.status = 404;
  this.body = _404;
});

module.exports = router;