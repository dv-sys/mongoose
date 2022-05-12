const connection = require('./connection');
const User = require('../models/users');

const delusers = (req,res) => {
    User.deleteOne({_id:req.params.id}).then((result) => {
        res.status(200).json(result);
    }).catch((err)=>{
        console.warn(err);
    })
}

module.exports = delusers;
