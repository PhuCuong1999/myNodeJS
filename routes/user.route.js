var express = require('express')
var router = express.Router();
var userController = require('../controllers/user.controller')

router.get('/', userController.users)
  
router.get('/search', userController.search)
  
router.get('/create', userController.create)
  
router.get('/:id', userController.getUserById)
  
router.post('/create', userController.createUser)

module.exports = router;