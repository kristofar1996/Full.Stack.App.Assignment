const bcrypt = require('bcrypt')

const User = require('../model/user')




module.exports = (req, res) =>{
const { username, password } = req.body;
User.findOne({username:username}, (error,user) => {
    if (user){
        bcrypt.compare(password, user.password, (error, same) =>{
            if(same){ // if passwords match
                // store user session, will talk about it later and log in first
                console.log('Password correct')
                req.session.userId = user._id
                //req.session.userType = user.userType;
            
                console.log(req.session)
                
                console.log("logged in successfuly")
                res.redirect('/home')
            } else{
                console.log("Wrong Passsword")
                res.redirect('/auth/loginpage')
            }
        })
    } 
    else{
        console.log("Invalid Username")
        res.redirect('/auth/loginpage')
    }
    })
}