var mysql = require('mysql')
var connectionDb = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345678',
	database: 'chat_server' 
})
module.exports = connectionDb;