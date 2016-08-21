var qs = require('querystring');
var fs = require('fs');

exports.insert = function(table, db,name) {
	// exports.select(table,db,function(rows){
	// 	for(var row in rows){
	// 		console.log(row);
	// 		if (row.room_name === name) {
	// 			console.log("Lap roi ten khac di");
	// 		}
	// 	}
	// })
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
		if (err) {throw err}
			callback(rows);
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