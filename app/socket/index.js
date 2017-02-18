'user strict';
const h = require('../helpers');

module.exports = (io,app) => {
	let allrooms = app.locals.chatrooms;

	

	io.of('/roomslist').on('connection', socket => {
		socket.on('getChatrooms', () => {
			socket.emit('chatRoomsList', JSON.stringify(allrooms));
		});
		socket.on('createNewRoom', newRoomInput => {
			//check if a room with that name already exist
			//if it exist do not create a new one, else create one
			if(!h.findRoomByName(allrooms, newRoomInput)) {
				allrooms.push({
					room: newRoomInput,
					roomID: h.randomHex(),
					users: []
				});
				//Emit an updated lsit to the creator
				socket.emit('chatRoomsList', JSON.stringify(allrooms));
				socket.broadcast.emit('chatRoomsList', JSON.stringify(allrooms));
			}
		})
	});

}