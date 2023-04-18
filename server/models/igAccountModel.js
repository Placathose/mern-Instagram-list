const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const igAccountSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  followers: {
    type: String,
    required: true
  },
  followings: {
    type: String,
    required: true
  },
  posts: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('igAccount', igAccountSchema)