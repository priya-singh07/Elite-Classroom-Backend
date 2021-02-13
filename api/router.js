const { Route53Resolver } = require('aws-sdk');
const express = require('express');
const router = express.Router();

router.use('/users', require('./users/user.router'));
router.use('/classrooms', require('./classrooms/classroom.router'));
router.use('/todo', require('./todos/todo.router'));
router.use('/chat',require('./chats/chat.js'));
router.use('/getClasses', require('./getClasses/getClasses.router'));
router.use('/work',require('./work/work.router'));
module.exports = router;
