const express = require('express');
const router = express.Router();
const games = require('../mocks/soups.json');

router.get('/getGames', (req, res) => {
    res.send(games.resources);
});

module.exports = router;