const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    tagName: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Tag', tagSchema)