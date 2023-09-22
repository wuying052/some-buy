const express = require('express');
const router = express.Router();
const service = require('../services/bookService');

//校验
const vaildator = []

//请求列表
router.get('/book/list',vaildator, service.querylist);

//新增
router.post('/book/add', vaildator, service.add);

//修改
router.post('/book/update', vaildator, service.update);

//删除
router.post('/book/remove', vaildator, service.remove);

//查看详情
router.post('/book/detail', vaildator, service.querydetail);

module.exports = router;
