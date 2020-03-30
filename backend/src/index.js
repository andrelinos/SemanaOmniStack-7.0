import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';

const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

mongoose.connect(
  'mongodb+srv://omnistack:2GibF7G2vNlE8VsX@omnistack-9q70m.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(
  cors({
    /* origin: 'http://meusite.com' */
  })
);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'ressized'))
);

app.use(require('./routes'));

server.listen(3333);
