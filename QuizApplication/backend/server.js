//This is the main file kindly start this first to connect to the database.

const express = require('express')
require("dotenv").config()

myProcesses = process.env
const quizApplication = express()

const backendRequest = require('./BackendRequests/requests')
const mongoose = require('mongoose')

quizApplication.use(express.json())
quizApplication.use((requests, response, next)=>{
    next()
})

//Request Configuration is in Backend Requests Folder
quizApplication.use('/api/quiz', backendRequest)

//Connection to Mongo DB is made here
mongoose.connect(myProcesses.MONG_URI, {autoIndex: true,})
    .then(()=>{
        quizApplication.listen(myProcesses.PORT, ()=>{
            console.log("Database is online.");
        })
    }) 
