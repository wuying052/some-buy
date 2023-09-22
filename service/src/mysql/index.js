const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'WY&514052',
  database: 'somebuyDB'
})

connection.connect();

// 在此处执行数据库操作
function execSQL(sql) {
  return new Promise((resolve, reject) => {
  connection.query(sql, (err, res) => {
      if (err) {
        const msg = err.message.split(':')[1]
        reject(msg)
        return;
      }
      resolve(res)
    })
  })
}
// connection.end();

module.exports = { execSQL }