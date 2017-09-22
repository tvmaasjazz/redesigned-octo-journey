const express = require('express');

const app = express();
const helloController = require('./helloController');

app.get('/hello', helloController);

app.get('/', (req, res) => res.json({ hello: 'world' }));

app.listen(3000);

//THIS IS A CHANGE IM MAKING
