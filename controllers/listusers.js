const connection = require('./connection');
const User = require('../models/users');

const listusers = (req,res) => {
    User.find({}, function(err,result){
        if(err){
            console.log('Error in retrive Data.');
        } 
        res.json(result);
    })
}
module.exports = listusers;    
