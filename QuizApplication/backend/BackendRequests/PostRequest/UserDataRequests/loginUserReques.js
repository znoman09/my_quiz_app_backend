//This file is used to log in a user from the database.

const bcrypt = require('bcryptjs')
const LoginSchema = require('../../../SchemaModel/loginModel')

//This user variable is supposed to be passed around to check for the roles.
let user;
const shareUser = ()=>{
    if(!user)
        return null;
    else
        return user
}

//Logging in a User into the Database
const logInUser = async(req, res)=>{

    //console.log(req.paras,"are the paramenters");
    let{email, password} = req.body
    if(!email || !password){
        return res.status(400).json("Invalid Parameters")
    }
    else if(password.length < 4){
        return res.status(400).json("Password should atleast be of 4 digits.")
    }
    //console.log(password);
    try {   
        const verifyUser = await LoginSchema.findOne({"email": email})
        if(verifyUser){
            const userPassValidation = await bcrypt.compare(password, verifyUser.password)
            if(userPassValidation){
                user = verifyUser
                console.log("User has been defined as\n\n",user);
                return res.status(200).json(verifyUser)
            }
            else
                return res.status(200).json("Password is Incorrect"), user
        }
       else{
            return res.status(400).json("No such user found")
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

user
module.exports = {
    logInUser,
    shareUser
}