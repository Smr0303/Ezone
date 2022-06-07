require("dotenv").config();

const express = require("express");
const cors = require("cors");
const client = require("./db");
const tableRoutes = require("./routes/table");
const port = process.env.PORT ||8000;

const app = express();

app.use(express.json());
app.use(cors({origin:true}));

app.get("/", (req, res) => {
  res.json({
    message: "well Done",
  });
});
client.connect(() => {
  console.log("running database connection");
});

//Route directing to all the table Routes;
app.use("/tables",tableRoutes); 

app.listen(port, () => {
  console.log("In backend");
});
