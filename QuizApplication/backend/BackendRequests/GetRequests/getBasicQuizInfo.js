const BasicQuizSchema = require('../../SchemaModel/basicQuizInfo')

const getBasicQuizInformation = async(req, res)=>{
    //console.log("Request Recieved"); 
    //console.log(req.params,"is the parameter");
    const quizBasicInfo = await BasicQuizSchema.find({})
    if(!quizBasicInfo){
        return res.status(200).json("No Quiz Exists Against this Test Number.")
    }
    res.status(200).json(quizBasicInfo)
}

module.exports = {
    getBasicQuizInformation
}