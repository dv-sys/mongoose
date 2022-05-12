const connection = require('./connection');
const User = require('../models/users');
const mongoose = require('mongoose');

const addusers = (req,res) => {
    const data = new User({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        salary:req.body.salary
    })
    data.save().then((result)=>{
        res.send(result);
        console.warn(result);
    })
}
module.exports = addusers;    
