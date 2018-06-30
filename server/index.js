'user strict';

const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const io = require('socket.io').listen(app);

const config = require('./config.js');
const router = require('./router.js');

const port = 3000;

const server = app
  .use(serve(config.clientPath))
  .use(bodyParser())
  .use(router.routes())
  .listen(port, (err) => {
    if (err) console.log(`Error connecting the server: ${err}`);
    else console.log(`Server listening on port ${port}.`);
  });

// const io = socket(server);

// io.on('connection', (socket,) => {
//   console.log('socketing')
//   socket.on('chat', (data) => {
//     io.sockets.emit('chat', data);
//   })
// });