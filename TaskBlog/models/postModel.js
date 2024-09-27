const mongoose = require('mongoose');

// Define your schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],

    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]

});

// Create the model
module.exports = mongoose.model("Post", postSchema);
