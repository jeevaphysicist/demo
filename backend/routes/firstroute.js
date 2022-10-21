const express = require('express');
const user = require('../controllers/user');

const router = express.Router();

router.get('/',user.userdata);

router.post("/post",user.userdetails);


module.exports = router ;
