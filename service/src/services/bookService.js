const { successModel } = require('../model')
const { execSQL } = require('../mysql/index')

function querylist(req, res, next){
  const sql = ` select * from blog `
  execSQL(sql).then(book => {
    const response = new successModel(book)
    res.json(response)
  }).catch(err=>{
    res.json(err)
  })
}

function add(req, res, next){
  const { title, content } = req.body;
  const date = Date.now()
  const sql = `insert into blog (title,content,createAt) values ('${title}','${content || ''}','${date}');`
  execSQL(sql).then(book => {
    const response = new successModel(book)
    res.json(response)
  }).catch(err=>{
    res.json(err)
  })
}

function update(req, res, next){
  const { id, content } = req.body;
  const sql  = `update blog set content = '${content}' where id = ${id};`
  execSQL(sql).then(book => {
    const response = new successModel(book)
    res.json(response)
  }).catch(err=>{
    res.json(err)
  })
}

function remove(req, res, next){
  const { id } = req.body;
  const sql = `delete from blog where id = ${id};`
  execSQL(sql).then(book => {
    const response = new successModel(book)
    res.json(response)
  }).catch(err=>{
    res.json(err)
  })
}

function querydetail(req, res, next){
  const { id } = req.body;
  const sql = `select * from bookdetail where id = ${id};`
  execSQL(sql).then(book => {
    const response = new successModel(book)
    res.json(response)
  })
}

module.exports = {
  querylist,
  add,
  update,
  remove,
  querydetail
}