const express = require("express");
const router = express.Router();
const {getTable,deleteTable,createTable} = require("../controllers/table");

//Api Endpoints
router.get("/get", getTable);
router.post("/create", createTable);
router.delete("/delete", deleteTable);

module.exports = router;

//REST Architecture Followed for Api routes purpose