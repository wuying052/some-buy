const { execSQL } = require('../mysql/index')
class successModel {
  constructor(data, message) {
    if (typeof data == 'string') {
      this.message = data
    }
    if (data) {
      this.data = data
      this.message = ''
    }
    if (message) {
      this.data = null
      this.message = message
    }
  }
}

/**
 * 由于execSQL是一个异步操作，不能直接在then函数返回，只能返回整个promise函数
 * */
const requestData = (req, res) => {
  const query = req.query || {}

  if (req.url == '/api/booklist') {
    const sql = ` select * from user `
    return execSQL(sql).then(res => {
      console.log(res);
      return new successModel(res)
    })
  }
  if (req.url == '/api/bookadd') {
    const sql = `insert into user (name,password) values ('${query.name}','${query.password}');`
    
    return execSQL(sql).then(res => {
      return new successModel(res)
    })
  }
  if (req.url == '/api/bookchange') {
   const sql  = `update user set name = '${query.name}' where id = ${query.id};`
    
    return execSQL(sql).then(res => {
      return new successModel(res)
    })
  }
  if (req.url == '/api/bookremove') {
    const sql = `delete from user where id = ${query.id};`
    
    return execSQL(sql).then(res => {
      return new successModel(res)
    })
  }
  if (req.url == '/api/bookdetail') {
    const sql = `select * from bookdetail where id = ${query.id};`
    
    return execSQL(sql).then(res => {
      return new successModel(res)
    })
  }
}

module.exports = requestData
