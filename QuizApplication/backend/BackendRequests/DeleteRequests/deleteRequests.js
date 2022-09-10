//This file contains two type of delete requests.
//1. Deleting a Single Quiz Paper.
//2. Deleting a Single Question in a Specific Quiz Paper

const QuizSchema = require('../../SchemaModel/schema')
const {shareUser} = require('../PostRequest/UserDataRequests/loginUserReques')

//Deleting a whole Quiz
const deleteQuiz = async(req, res)=>{
    const user = shareUser()
    if(user!==null){
        if(user.role === "admin"){
            const{test} = req.params        
            const deleteQuiz = await QuizSchema.remove({"testNumber": test})    //testNumber is used as an id here.
            if(!deleteQuiz){
                return res.status(200).json("Requested Quiz Does Not Exists.")
            }
            res.status(200).json(deleteQuiz)
        }
        else    
            res.status(400).json("You do not have the authority to perform this action.")
    }
    else    
        res.status(400).json("You are not logged in.")
}

//Deleting a Single Question 
const deleteQuestion = async(req, res)=>{
    const user = shareUser()
    if(user!==null){
        if(user.role === "admin"){
            const {test, que} = req.params
            const deleteQuestion = await QuizSchema.findOneAndDelete({"testNumber": test, "questionNumber": que})
            if(!deleteQuestion){
                return res.status(200).json("No Such Question Existed in the First Place")
            }
            res.status(200).json(deleteQuestion)
        }
        else    
            res.status(400).json("You do not have the authority to perform this action.")
    }
    else    
        res.status(400).json("You are not logged in.")
}

module.exports = {
    deleteQuestion,
    deleteQuiz
}