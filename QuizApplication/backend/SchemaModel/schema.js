const mongoose = require('mongoose')
const quizApplicationSchema = mongoose.Schema


//testNumber represents questions which belong to the same quiz. Meaning all Question with tN: 1 are of Quiz 1.
//questionNumber is a unique field of every question which will be used to search the Questions in a specific quiz.
//quizQuestion is the question which will be asked from the user.
//choices will be given as an option to answer.
//answer will be used to calculate the score and check the choice opted by the user. 
const quizSchema = quizApplicationSchema({
    testNumber: {
        type: Number,
        required: true,
    },
    questionNumber: {
        type: Number,
        required: true,
        unique:true,
    },
    quizQuestion: {
        type: String,
        required: true
    },
    choice1: {
        type: String,
        required: true
    },
    choice2: {
        type: String,
        required: true
    },
    choice3: {
        type: String,
        required: true
    },
    choice4: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('QuizSchema', quizSchema)