const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passportLocalMongose = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost:27017/mern")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    description: {
        type: String,
        required: true
    }
})

UserSchema.plugin(passportLocalMongose)

const User = mongoose.model("User", UserSchema)

module.exports = User;