const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

// usersCtrl = user controller
router.post('/', usersCtrl.create)

module.exports = router