
const router = require('express').Router();

const TeamController = require('../controller/team.controller');

router.post('/registerTeam',TeamController.registerTeam);

module.exports = router;
