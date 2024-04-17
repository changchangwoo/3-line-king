require('dotenv').config();
const express = require("express");
const { setLine, evalLine } = require('../controller/gamesController');
const router = express.Router();

router.use(express.json());

router.post("/", setLine)
router.post("/eval", evalLine)

module.exports = router;
