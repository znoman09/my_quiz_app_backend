//This file is used to sign up a new user and save their credentials to the database.

const bcrypt = require('bcryptjs')
const LoginSchema = require('../../../SchemaModel/loginModel')

//Posting a new User into the Database
const signUpNewUser = async(req, res)=>{
    //console.log(req.paras,"are the paramenters");
    let{email, password, role} = req.body
    if(password.length < 4){
        return res.status(400).json("Password should atleast be of 4 digits.")
    }
    password = await bcrypt.hash(password, 10)
    console.log(password);
    try {   
        const newUser = await LoginSchema.create({email, password, role})
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}



module.exports = {
    signUpNewUser
}