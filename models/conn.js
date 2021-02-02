// THIS IS A HELPER FILE THAT CAN BE USED EACH TIME WE NEED TO IMPLEMENT PGP IN POSTGRESQL
'use strict';
const host = 'localhost',
    database = 'apple_ceos';

// You DO NOT want a production-ready server spitting out database queries to the console upon each query (that'd be bad); but for dev purposes, we want to be able to see these outputs in the console
const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY:', event.query);
    }
});

const options = {
    host,
    database
}

const db = pgp(options);

module.exports = db;