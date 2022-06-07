const client = require("../db");

exports.getTable = async (req, res) => {
  console.log("ingtt");
  try {
    const data = await client.query(`SELECT * FROM DATA;`);
    const array = data.rows
    console.log(data.rows);
    res.status(200).json({
      array,
      message: "All rows",
    });
  } catch (err) {
      res.status(500).json({
          message: err.message,
      })
    throw err;
  }
};
