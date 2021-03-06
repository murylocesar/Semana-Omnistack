const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://murylo:teste@cluster0-7cu67.mongodb.net/murylo?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopogy: true,
});


app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);
