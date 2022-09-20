//This postRequest file is used to post a Single question of the quiz.

const QuizSchema = require('../../../SchemaModel/schema')
const BasicQuizSchema = require('../../../SchemaModel/basicQuizInfo')

//Posting a Question of a Specific Quiz 
const postQuestion = async(req, res)=>{ 
    if(req.role!=null){     //Checking to see if the user returned is null.
        if(req.role === "admin"){  //Checking if the user is admin as admin are only allowed to add Questions.
            const {testNumber, questionNumber, quizQuestion, choice1, choice2, choice3, choice4, answer} = req.body
            try {
                const newQuizQuestion = await QuizSchema.create({testNumber, questionNumber, quizQuestion, choice1, choice2, choice3, choice4, answer} )
                return res.status(200).json(newQuizQuestion)
            } catch (error) {
                res.status(400).json({error: error.message}) 
            }
        }
        else    
            res.status(400).json("You do not have the authority to perform this action.")
    }
    else    
        res.status(400).json("You are not logged in.")

}

const postQuizInfo = async(req, res)=>{ 
    if(req.role!=null){     //Checking to see if the user returned is null.
        if(req.role === "admin"){  //Checking if the user is admin as admin are only allowed to add Questions.
            const {testNumber, questionHeading} = req.body
            try {
                const newQuizInformation = await BasicQuizSchema.create({testNumber, questionHeading})
                return res.status(200).json(newQuizInformation)
            } catch (error) {
                res.status(400).json({error: error.message}) 
            }
        }
        else    
            res.status(400).json("You do not have the authority to perform this action.")
    }
    else    
        res.status(400).json("You are not logged in.")

}

module.exports = {
    postQuestion,
    postQuizInfo
}