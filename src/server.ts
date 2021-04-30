import 'reflect-metadata';
import routes from './routes';
import express from 'express';
import { Socket } from 'socket.io';

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3333;

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

app.use(express.json());
app.use(routes);

http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});