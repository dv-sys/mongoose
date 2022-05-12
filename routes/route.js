const express = require('express');
const router = express.Router();
const listusers = require('../controllers/listusers');
const addusers = require('../controllers/addusers');
const updateusers = require('../controllers/updateuser');
const delusers = require('../controllers/delusers');

router.get('/',listusers);
router.post('/adduser',addusers);
router.put('/updateuser',updateusers);
router.delete('/deluser/:id',delusers);


module.exports = router;