// 接收post数据
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method == 'GET') {
      resolve('')
    }
    const postData = ''
    req.on('data', (chunk) => {
      postData += chunk
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return;
      }
      resolve(JSON.parse(postData))
    })
  })
}

const httpServer = (req, res) => {

  res.setHeader('Content-Type', 'application/json') //设置数据格式
  // 设置允许跨域的源
  // res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  // 设置cookie允许跨域
  res.setHeader("Access-Control-Allow-Credentials", true);
  // 设置可以跨域的请求方法
  res.setHeader("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");

  getPostData(req).then(postData => {
    req.body = postData

    const requestData = require('../controller')
    const respromise = requestData(req)
    if (respromise) {
      respromise.then(resdata => {
        res.end(JSON.stringify(resdata))
      })
      return;
    }
    res.end()
  })
}
module.exports = httpServer