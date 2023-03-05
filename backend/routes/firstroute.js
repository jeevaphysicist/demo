const express = require('express');
const user = require('../controllers/user');

const router = express.Router();

router.get('/',user.userdata);

router.post("/post",user.userdetails);

router.post('/update',user.updatedata);


module.exports = router ;
