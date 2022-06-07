const express = require('express')
const routes=express.Router();

const {getTable,createTable,updateTable,deleteTable}=require('../controllers/table');

routes.get=("/getTable",()=>{
    console.log('Hitting getTbale')
},getTable);

// routes.post('/create',createTable);
// routes.put('/update',updateTable);
// routes.delete('destroy',deleteTable);

module.exports=routes;
