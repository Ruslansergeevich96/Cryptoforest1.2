'use strict'

const Router = require('express').Router;
const usersController = require('../controllers/users-controller');
const router = new Router();

router.post('/registration', usersController.registration);
router.post('/login', usersController.login);
router.post('/logout', usersController.logout);
router.get('/activate/:link', usersController.activate);
router.get('/refresh', usersController.refresh);
router.get('/users', usersController.getUsers);

module.exports = router