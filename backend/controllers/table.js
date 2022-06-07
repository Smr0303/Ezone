const client = require("../db");

exports.getTable = async (req, res) => {
  console.log("ingtt");
  try {
    const data = await client.query(`SELECT * FROM DATA;`);
    const array = data.rows;
    console.log(data.rows);
    res.status(200).json({
      array,
      message: "All rows",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
    throw err;
  }
};

exports.deleteTable = async (req, res) => {
  const id = req.query.ID;

  client
    .query(`DELETE FROM DATA WHERE ID=${id};`)
    .then((resut) => {
      res.status(200).json({
        message: `DELETED row with id ${id}`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error occurred",
      });
    });
};

exports.createTable = async (req, res) => {
  const { Id, name, Age } = req.query;
  console.log(Id,name,Age);
  client.query(`INSERT INTO  DATA  VALUES (${Id},${name},${Age});`)
  .then((result) => {
      res.status(200).json({
        message: "Data successfully inserted",
      })
  })
  .catch((err) => {
    console.log(err);
    res.status(503).json({
      message:`Server error`,
    })
  })
};
