
const router = require('express').Router();

const UserController = require('../controller/user.controller');

router.post('/registerJudge',UserController.registerJudges);

module.exports = router;
