var config = require('knexfile');
var knex = require('knex')(config);

module.exports = knex;