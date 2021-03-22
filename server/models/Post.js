const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Post", PostSchema);