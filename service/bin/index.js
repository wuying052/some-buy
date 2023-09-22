const port = 5001

/**
 * http
 */

// const http = require('http')

// const httpServer = require('../src/httpServer')

// const server = http.createServer(httpServer)

// server.listen(port,()=>{
//   console.log('connect success');
// })



/**
 * express方式
 */

const express = require('express')
const app = express()

const bodyParser = require('body-parser'); // 引入body-parser模块
const cors = require('cors'); // 引入cors模块

const routes = require('../src/routes'); //导入自定义路由文件，创建模块化路由


app.use(bodyParser.json()); // 解析json数据格式
app.use(bodyParser.urlencoded({extended: true})); // 解析form表单提交的数据application/x-www-form-urlencoded

app.use(cors()); // 注入cors模块解决跨域

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})