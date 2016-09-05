var Rooms = require('lib/bookshelf')({
	tableName:'rooms',
},
{
	showRooms: function(){
		return this.query((qb)=>{
		});
	}
});

module.exports = Rooms;