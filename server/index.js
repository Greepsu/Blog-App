const express = require("express");
const app = express();
const port = 5001;
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const server = require('http').Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

//Middleware
app.use(cors())
app.use(express.json())




//Socket.io

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(5001, () => {
  console.log(`Server started: socket.io`)
})





//Import posts routes
const postsRoute = require('./routes/posts')
app.use('/api', postsRoute)


//Connect to Database
mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("Connected to the Database")
)

app.listen(port, () => console.log(`Blog app listening on port ${port} !`));