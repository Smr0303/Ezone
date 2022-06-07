const client = require("../db");

exports.getTable = async (req, res) => {
  console.log("ingtt");
  client.query(`SELECT * FROM DATA;`).then((data) => {
    console.log(data);
    res
      .status(200)
      .json({
        data,
        message: "All rows",
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  });
};
