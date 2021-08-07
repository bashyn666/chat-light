const exprees = require('express');
const app = exprees();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

const rooms = new Map();

app.get('/rooms', function (req, res) {
    res.json(rooms);
});

io.on('connection', socket => {
    console.log('user connected', socket.id);
});

server.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }

    console.log('Server started');
});