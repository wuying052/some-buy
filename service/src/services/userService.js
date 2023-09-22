const { successModel } = require('../model')

const { execSQL } = require('../mysql/index')

function querylist(req, res, next){
  const sql = ` select * from user `
  execSQL(sql).then(user => {
    const response = new successModel(user)
    res.json(response)
  })
}

function add(req, res, next){
  const { name, password } = req.body;
  const sql = `insert into user (name,password) values ('${name}','${password}');`
  execSQL(sql).then(user => {
    const response = new successModel(user)
    res.json(response)
  })
}

function update(req, res, next){
  const { id, name } = req.body;
  const sql  = `update user set name = '${name}' where id = ${id};`
  execSQL(sql).then(user => {
    const response = new successModel(user)
    res.json(response)
  })
}

function remove(req, res, next){
  const { id } = req.body;
  const sql = `delete from user where id = ${id};`
  execSQL(sql).then(user => {
    const response = new successModel(user)
    res.json(response)
  }).catch(err=>{
    res.json(err)
  })
}

function getUser(req, res, next){
  const { id } = req.body;
  const sql = `select * from user where id = ${id};`
  execSQL(sql).then(user => {
    const response = new successModel(user)
    res.json(response)
  }).catch(err=>{
    res.json(err)
  })
}

module.exports = {
  querylist,
  add,
  update,
  remove,
  getUser
}
