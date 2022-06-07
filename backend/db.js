let pg=require('pg');
let client = new pg.Client(process.env.URL);

module.exports = client;