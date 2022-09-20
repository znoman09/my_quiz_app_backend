//This file contains 3 types of getRequests. 
//1. To get all of the Quizes. 
//2. To get a single Quiz. 
//3. To get a single question.
//Anybody can get whether they are admin or not.

const QuizSchema = require('../../SchemaModel/schema')

//Getting all of the Quizes
const getAllQuiz = async(req, res)=>{
    const allQuizes = await QuizSchema.find({}).sort({createdAt: -1})
    if(allQuizes){
        return res.status(200).json(allQuizes)
    }
    res.status(200).json("No Records are available")
}

//Getting a Single Quiz
const singleQuiz = async(req, res)=>{
    //console.log("Request Recieved"); 
    const {testNumber} = req.params
    //console.log(req.params,"is the parameter");
    const quizQuestions = await QuizSchema.find({"testNumber": testNumber})
    if(!quizQuestions){
        return res.status(200).json("No Quiz Exists Against this Test Number.")
    }
    res.status(200).json(quizQuestions)
}

//Getting a Single Question
const singleQuestion = async(req, res)=>{
    const {test, que} = req.params
    //console.log(req.params,"are the parameters.");
    const quizQuestion = await QuizSchema.find({"testNumber": test, "questionNumber":que})
    if(!quizQuestion){
        return res.status(200).json("No Such Question Exists")
    }
    res.status(200).json(quizQuestion)
}


module.exports = {
    getAllQuiz,
    singleQuiz,
    singleQuestion
}