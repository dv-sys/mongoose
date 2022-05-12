const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    city:String,
    salary:Number
})

module.exports = mongoose.model('users',userSchema);