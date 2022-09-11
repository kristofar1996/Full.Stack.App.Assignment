const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const Schema = mongoose.Schema;
const bookingSchema = new Schema({
  name: {type:String, unique: true},
  email: {type:String, unique: true},
  number: {type:String, unique: true},
  address: {type:String, unique: true},
  destination: {type:String, unique: true},
  numbers: {type:String, unique: true},
  arrivingdate: {type:String, unique: true},
  leavingdate: {type:String, unique: true},
  text: String,
  email: String


})

const book = mongoose.model('book', userSchema);
module.exports = book;