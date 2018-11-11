const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Necessário para entender as requisições Real Time
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Conexão com o banco
mongoose.connect(
    'mongodb://goweek:goweek123@ds027479.mlab.com:27479/goweek', 
    {
    useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

//Uses
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use(require('./routes'));

//Listener
server.listen(3003, () => {
    console.log('Server listening on port 3003');
});