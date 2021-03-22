const express = require("express");
const app = express();
const port = 5001;
const mongoose = require('mongoose')
require('dotenv').config()

//Import posts routes
const postsRoute = require('./routes/posts')
app.use('/api', postsRoute)

//Connect to Database
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to the Database")
)

app.listen(port, () => console.log(`Blog app listening on port ${port} !`));
