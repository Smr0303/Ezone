let pg=require('pg');
var client = new pg.Client(process.env.URL);

module.exports = client;