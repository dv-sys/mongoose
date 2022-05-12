const connection = require('./connection');
const User = require('../models/users');
const mongoose = require('mongoose');

const updateusers = (req,res) => {
    User.updateOne({_id:req.body.id},{$set:{name:req.body.name,email:req.body.email,city:req.body.city}}).then((result)=>{
        res.send(result);
        console.warn(result);
    })
}
module.exports = updateusers;    
