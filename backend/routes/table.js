const express = require("express");
const router = express.Router();
const {getTable,deleteTable} = require("../controllers/table");

router.get("/get", getTable);
router.get("/delete", deleteTable);

module.exports = router;
