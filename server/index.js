const express = require("express");
const app = express();
const port = 5001;
const mongoose = require('mongoose')
const cors = require('cors')
const io = require("socket.io")(http);
require('dotenv').config()

//Middleware
app.use(cors())
app.use(express.json())

//Import posts routes
const postsRoute = require('./routes/posts')
app.use('/api', postsRoute)

//Routes
app.get('/', (req, res) => {
    res.send("Homepage");
})

//Connect to Database
mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("Connected to the Database")
)

app.listen(port, () => console.log(`Blog app listening on port ${port} !`));