const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        default: ""
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        default: "untitled"
    },
    date: {
        type: Date,
        default: returnDate()
    },
    location: {
        type: String,
        default: ""
    },
    images: [{
        type: String,
        default:[]
    }],
    body: {
        type: String,
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
    }],
    likes: {
        type: Number,
        default: 0,
    },
    shares: {
        type: Number,
        default: 0,
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

function returnDate() {
    return new Date()
}

module.exports = mongoose.model('Post', postSchema)