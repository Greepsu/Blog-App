const express = require("express");
const app = express();
const port = 5001;

//Import posts routes
const postsRoute = require('./routes/posts')
app.use('/api', postsRoute)

app.listen(port, () => console.log(`Blog app listening on port ${port} !`));
