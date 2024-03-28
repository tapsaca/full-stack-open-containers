const express = require('express')
const redis = require('../redis')
const router = express.Router()

router.get('/', async (req, res) => {
  const todoCount = await redis.getAsync('added_todos')
  if (!todoCount) {
    await redis.setAsync('added_todos', 0)
  }
  res.send({ 'added_todos': todoCount })
})

module.exports = router