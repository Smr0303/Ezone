const client = require("../db");

exports.getTable = (req, res) => {
    try{
        client.query(`SELECT * FROM DATA;`)
        .then((data) => {
            console.log(data);
            res.status(200).json({
                data,
                message:"Here are the rows",
            })
        })
    }
    catch(err) {
        console.error(err);
    }

};
exports.createTable = (req, res) => {};
exports.updateTable = (req, res) => {};
exports.deleteTable = (req, res) => {};
