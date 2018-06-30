'user strict';

const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const socket = require('socket.io');

const config = require('./config.js');
const router = require('./router.js');
const models = require('./models/models-messages.js');

const port = 3000;

const server = app
  .use(serve(config.clientPath))
  .use(bodyParser())
  .use(router.routes())
  .listen(port, (err) => {
    if (err) console.log(`Error connecting the server: ${err}`);
    else console.log(`Server listening on port ${port}.`);
  });

const io = socket(server);

io.on('connection', (socket) => {
  console.log('An user connected');
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
    models.addToDb(data);
  });
});