'use strict'

var express = require('express');
var router = express.Router();
var db = require('../config/db_chat');
var handleConnection = require('../db/handleConnection');
var Promise = require('bluebird');
var co = require('co');


function getUsers(table,db){
	const getUsersAsync = Promise.promisify(handleConnection.select);
	return getUsersAsync(table,db);
}


/* GET users listing. */
router.get('/', function(req, res, next) {
	co(function *() {
		let value = yield getUsers('users',db);
		console.log('hihi');
		return value;
	}).then(function(value){
		res.send(value);
	}).catch(function(err){

	})
});

module.exports = router;
