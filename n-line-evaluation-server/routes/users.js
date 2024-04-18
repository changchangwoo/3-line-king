require('dotenv').config();
const express = require("express");
const { join, list, detail} = require('../controller/usersController');
const router = express.Router();

router.use(express.json());
router.post("/",join)
router.get("/",list)
router.get("/:id", detail)

module.exports = router;
