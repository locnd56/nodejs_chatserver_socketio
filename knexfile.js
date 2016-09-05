require('dotenv').config({silent:true});
module.exports = {
	client: 'mysql',
	connection: {
		database: 'chat_server',
		host:     process.env.MYSQL_MASTER_HOST || 'localhost',
		user:     process.env.MYSQL_MASTER_USER_NAME || '',
		password: process.env.MYSQL_MASTER_USER_PASSWORD || '12345678',
	},
}