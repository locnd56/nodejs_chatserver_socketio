var qs = require('querystring');
var fs = require('fs');

exports.insert = function(table, db,name) {
	var query = "INSERT INTO "+ table+ " VALUES (NULL, '"+ name+"');"
	db.query(query,function(err){
		if (err) {
			console.log(err);
		}
	});
}

exports.select = function(table,db,callback){
	var query = "SELECT * FROM "+table;
	db.query(query,function(err,rows){
		if (err) {callback(err)}
			callback(null,rows);
	})
}

exports.update = function(table,db, column, data){
	var query = "UPDATE "+table+ "SET " + column + " = "+data;
	db.query(query,function(err){
		if (err) {console.log(err);}
	})
}

exports.deleteAll = function(table,db){
	var query = "DELETE FROM "+ table;
	db.query(query, function(err){

	})
}
exports.delete= function(table,db, id){
	var query = "DELETE FROM "+ table + "WHERE id=" + id;
	db.query(query, function(err){
		if (err) {console.log(err);}
	})
}