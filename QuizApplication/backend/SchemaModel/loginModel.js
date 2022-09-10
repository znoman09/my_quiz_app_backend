//This file contains the model for the User in the database. 

const mongoose = require('mongoose')
const AppLoginSchema = mongoose.Schema

const LoginSchema = AppLoginSchema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ["user", "admin"],
        required: true,
        default: "user",
      },
    },
    { timestamps: true }
)

module.exports = mongoose.model("LoginSchema", LoginSchema)