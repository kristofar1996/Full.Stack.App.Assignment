const User = require('../model/user.js')
const path = require('path')
module.exports = (req,res)=>{
    console.log(req.body)
User.create(req.body, (error, user) => {
    console.log("successful")
   /*
   if(error){
    console.log(error)
    return res.redirect('/auth/register')
    }
   */

res.redirect('/home')
})
}