const express = require('express');
const router = express.Router(); // 注册路由 

// const userRouter = require('./user'); // 引入user路由模块
const bookRouter = require('./book'); // 引入book路由模块

// router.use('/api', userRouter); // 注入用户路由模块
router.use('/api', bookRouter); // 注入book路由模块

//err处理

module.exports = router;
