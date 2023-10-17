const mongoose = require('mongoose')

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
        default: "--"
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
    }
}, {
    timestamps: true
})

function returnDate() {
    return new Date()
}

module.exports = mongoose.model('Post', postSchema)