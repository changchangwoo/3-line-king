require('dotenv').config();
const express = require("express");
const { join } = require('../controller/usersController');
const router = express.Router();

router.use(express.json());
router.post("/",join)

module.exports = router;
