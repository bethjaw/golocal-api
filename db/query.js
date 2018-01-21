const db = require('./connect')

function getUsers(){
  return db('user').select()
}

function getUserById(id){
  return db('user').select('*').where('id', id)
}

function getConnections(id){
  return db('connection').select('*').where('user_id_1', id).innerJoin('user', 'user_id_2', 'user.id')
}

function getLocation(id){
  return db('location').select('*').where('user_id', id).innerJoin('user', 'user_id', 'user.id')
}

function getToDo(id){
  return db('todo').select('*').where('location_id', id)
}

function getRecs(id){
  return db('genrecs').select('*').where('location_id', id)
}

function createUser(user){
  return db('user').insert(user).returning('*')
}



module.exports = {
  getUsers,
  getUserById,
  getConnections,
  getLocation,
  getToDo,
  getRecs,
  createUser,

}
