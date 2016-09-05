'use strict';
var Rooms = require('models/rooms');
module.exports = class {
	static *rooms(){
		var rooms = yield Rooms.showRooms().fetchAll();
	}
}