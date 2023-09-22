const express = require('express');
const router = express.Router();
const service = require('../services/userService');

//校验
const vaildator = []

//登陆
router.post('/login', vaildator, service.login);

//注册
router.post('/register', vaildator, service.register);

router.post('/getUsers', vaildator, service.querylist);
router.post('/getUser', vaildator, service.getUser);
router.post('/user/add', vaildator, service.add);
router.post('/user/update', vaildator, service.update);
router.post('/user/remove', vaildator, service.remove);

module.exports = router;
