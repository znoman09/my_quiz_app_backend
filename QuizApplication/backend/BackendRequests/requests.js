//This file contains routes and params for req.params and callback function to their respective functionalities.

const express = require('express')
const requestsRoute = express.Router()
const {authenticateRole} = require('./authenticateRole')
const {getAllQuiz, singleQuiz, singleQuestion} = require('./GetRequests/getRequests')
const {postQuestion} = require('./PostRequest/ApplicationDataRequests/postRequest')
const {deleteQuestion, deleteQuiz} = require('./DeleteRequests/deleteRequests')
const {signUpNewUser} = require('./PostRequest/UserDataRequests/postUserRequest')
const {logInUser} = require('./PostRequest/UserDataRequests/loginUserReques')
const {updateQuestion} = require('./PatchRequest/updateQuestion')


let user;
//Getting all the Quiz Questions
requestsRoute.get('/', getAllQuiz)

//Getting a Single Quiz Paper
requestsRoute.get('/:testNumber', singleQuiz)

//Getting a Single Question of a Specific Quiz Paper
requestsRoute.get('/:test/:que', singleQuestion)

//Posting a new Quiz Question
requestsRoute.post('/', authenticateRole, postQuestion)

//Posting a new User
requestsRoute.post('/signup', signUpNewUser)

//Logging the User
requestsRoute.post('/login', logInUser)

//Deleting a Single Question
requestsRoute.delete('/:test/:que', authenticateRole, deleteQuestion)

//Deleting a Whole Quiz
requestsRoute.delete('/:test', authenticateRole, deleteQuiz)

//Updating a Question in a Quiz
requestsRoute.patch('/:testNum/:queNum', authenticateRole, updateQuestion)

module.exports = requestsRoute