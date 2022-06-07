const express = require("express");
const router = express.Router();
const {getTable} = require("../controllers/table");

router.get("/get", getTable);

module.exports = router;
