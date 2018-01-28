const db = require('./connect')

function getUsers(){
  return db('user').select()
}

function getUserById(id){
  return db('user').select('*').where('id', id)
}

function getConnectionLocation(id){
  return db('connection').select('*').where('user_id_1', id).innerJoin('user', 'user_id_2', 'user.id').innerJoin('location', 'user_id', 'user.id')
}

function getConnections(id){
  return db('connection').select('*').where('user_id_1', id).innerJoin('user', 'user_id_2', 'user.id')
}

function getLocation(id){
  return db('location').select('*').where('id', id)
}

function getLocationByUser(id){
  return db('location').select('*').where('user_id', id)
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


function getBucket(id){
  return db('bucketlist').select('*').where('user_id', id)
}



// CREATE
function createUser(user){
  return db('user').insert(user).returning('*')
}

function addLocationToUser(id, location){
  return db('location').insert(location).where('user_id', id).returning('*')
}

function addToDo(id, todo){
  return db('todo').insert(todo).where('location_id', id)
}

function addGenRec(id, genrec){
  return db('genrecs').insert(genrec).where('location_id', id)
}

function addToBucketList(id, location){
  return db('bucketlist').insert(location).where('user_id', id)
}


// UPDATE
function updateUser(info, id){
  return db('user').update(info).where('id', id).returning('*')
}


// DELETE
function deleteUser(id){
  return db('user').delete().where('id', id)
}


// createConnection


module.exports = {
  getUsers,
  getUserById,
  getConnectionLocation,
  getConnections,
  getLocation,
  getLocationByUser,
  getAllLocations,
  getToDo,
  getRecs,
  getBucket,
  createUser,
  addLocationToUser,
  addToDo,
  addGenRec,
  addToBucketList,
  updateUser,
  deleteUser,

}
