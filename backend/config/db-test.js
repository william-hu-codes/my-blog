//  connection string - .env
require('dotenv').config()

// db - connection
require('./db.connection')

// import models
const User = require("../models/user")
const Post = require("../models/post")
const Tag = require("../models/tag")

async function deleteAllPosts() {
    try {
        await Post.deleteMany({})
        console.log("deleted all posts")
    }catch(err){
        console.log(err)
    }
    process.exit()
}

// deleteAllPosts()

async function deleteAllUsers() {
    try {
        await User.deleteMany({})
        console.log("deleted all users")
    }catch(err){
        console.log(err)
    }
    process.exit()
}

// deleteAllUsers()

async function deleteAllTags() {
    try {
        await Tag.deleteMany({})
        console.log("deleted all tags")
    }catch(err) {
        console.log(err)
    }
    process.exit()
}

// deleteAllTags()