
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
    type: String,
    required: true,
    unique: true
    },
    password: {
    type: String,
    required: true
    
    },
    
});


userSchema.pre('save', function(next){
  const user = this
  bcrypt.hash(user.password, 10, (error, hash) => {
      user.password = hash
      next()
  })
})

const User = mongoose.model('User', userSchema);
module.exports = User;