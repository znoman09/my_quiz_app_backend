
const userWebToken = require('jsonwebtoken')

function authenticateRole(req, res, next){
    console.log("authentication is called");
    const authenticateRole = req.headers['authorization']
    const token =  authenticateRole && authenticateRole.split(' ')[1]
    if(token === null)
        return res.status(400).json("Token is null.")
    
        console.log("Token=>", token);
    userWebToken.verify(token, process.env.USER_ACCESS_KEY, (err, role)=>{
        console.log("Made into verify");
        if(err)
            return res.status(403).json("No longer a valid token.")
        console.log("Decrypted Role is:",role); 
        req.role = role
        console.log("Role in req.role is:",req.role);
        next()
    })
}

module.exports = {
    authenticateRole
}