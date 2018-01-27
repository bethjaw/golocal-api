const express = require('express')
const router = express.Router()
const query = require('./db/query')

// READ
router.get('/user', (req, res) => {
  query.getUsers()
    .then((user) => {
      res.json(user)
    })
})

router.get('/user/:id', (req, res) => {
  let id = req.params.id
  query.getUserById(id)
    .then((user) => {
      res.json(user)
    })
})

router.get('/connectlocate/:id', (req, res) => {
  let id = req.params.id
  query.getConnectionLocation(id)
    .then((connection) => {
      res.json(connection)
    })
})

router.get('/connections/:id', (req, res) => {
  let id = req.params.id
  query.getConnections(id)
    .then((connections) => {
      res.json(connections)
    })
})

router.get('/location/:id', (req, res) => {
  let id = req.params.id
  query.getLocation(id)
    .then((location) => {
      res.json(location)
    })
})

router.get('/locations', (req, res) => {
  query.getAllLocations()
    .then((locations) => {
      res.json(locations)
    })
})

router.get('/locationByUser/:id', (req, res) => {
  let id = req.params.id
  query.getLocationByUser(id)
    .then((location) => {
      res.json(location)
    })
})

router.get('/todo/:id', (req, res) => {
  let locId = req.params.id
  query.getToDo(locId)
    .then((todo) => {
      res.json(todo)
    })
})

router.get('/recs/:id', (req, res) => {
  let locId = req.params.id
  query.getRecs(locId)
    .then((recs) => {
      res.json(recs)
    })
})


// CREATE
router.post('/user', (req, res) => {
  query.createUser(req.body)
    .then((user) => {
      res.json(user)
    })
})

router.post('/addLocation/:id', (req, res) => {
  let id = req.params.id
  let location = req.body
  query.addLocationToUser(id, location)
    .then((newlocation) => {
      res.json(newlocation)
    })
})

router.post('/addtodo/:id', (req, res) => {
  let id = req.params.id
  let todo = req.body
  query.addToDo(id, todo)
    .then((newTodo) => {
      res.json(newTodo)
  })
})

router.post('/addgenrec/:id', (req, res) => {
  let id = req.params.id
  let genrec = req.body
  query.addGenRec(id, genrec)
    .then((newRec) => {
      res.json(newRec)
  })
})


// UPDATE
router.put('/updateUser/:id', (req, res) => {
  let id = req.params.id
  let info = req.body
  query.updateUser(info, id)
    .then((userInfo) => {
      res.json(userInfo)
    })
})

// DELETE
router.delete('/deleteUser/:id', (req, res) => {
  let id = req.params.id
  query.deleteUser(id)
    .then((deleted) => {
      res.json()
    })
})

module.exports = router
