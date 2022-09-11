//This file is used to update a single question.

const QuizSchema = require('../../SchemaModel/schema')

//Updating Quiz
const updateQuestion = async(req, res)=>{ 
    console.log();("User is: ",req.role)
    if(req.role!=null){
        if(req.role==="admin"){
            const {testNum, queNum} = req.params
            const updateQue = await QuizSchema.findOneAndUpdate({"testNumber": testNum, "questionNumber":queNum},{...req.body})
            if(!updateQue){
                return res.status(400).json("No Such Question")
            }
            return res.status(200).json(updateQue)
        }
        else    
            return res.status(400).json("You are not allowed to do this operation.")

    }
    else    
        return res.status(400).json("You are not logged in.")
}

module.exports = {
    updateQuestion
}