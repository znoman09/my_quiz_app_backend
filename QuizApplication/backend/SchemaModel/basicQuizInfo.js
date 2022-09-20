const mongoose = require('mongoose')
const basicQuizApplicationSchema = mongoose.Schema


//This here is used to get just the quiz number and its main heading.
const basicQuizSchema = basicQuizApplicationSchema({
    testNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    questionHeading: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('BasicQuizSchema', basicQuizSchema)