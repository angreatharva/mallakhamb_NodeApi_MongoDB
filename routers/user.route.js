
const router = require('express').Router();

const UserController = require('../controller/user.controller');

router.post('/registerJudge',UserController.registerJudges);

router.post('/login',UserController.login);

module.exports = router;
