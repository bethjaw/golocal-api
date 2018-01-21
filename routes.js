const express = require('express')
const router = express.Router()
const query = require('./db/query')

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

router.get('/connection/:id', (req, res) => {
  let id = req.params.id
  query.getConnections(id)
    .then((connection) => {
      res.json(connection)
    })
})

router.get('/location/:id', (req, res) => {
  let userId = req.params.id
  query.getLocation(userId)
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

router.put('/user', (req, res) => {
  query.createUser(req.body)
    .then((user) => {
      res.json(user)
    })
})



module.exports = router
