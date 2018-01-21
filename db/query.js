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

function getAllLocations(){
  return db('location').select('*')
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

function updateUser(info, id){
  return db('user').update(info).where('id', id).returning('*')
}

function deleteUser(id){
  return db('user').delete().where('id', id)
}

// createConnection
// addLocation


module.exports = {
  getUsers,
  getUserById,
  getConnections,
  getLocation,
  getAllLocations,
  getToDo,
  getRecs,
  createUser,
  updateUser,
  deleteUser,

}
