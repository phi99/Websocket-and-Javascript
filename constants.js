//in progress

module.exports={
	PORT: 8081,

	CUSTOM_ERRORS: [
		'uncaughtException',
		'unhandledRejection',
		'SIGINT' //this event will trigger when 'Ctrl + C' is pressed in the terminal
	],

	ALLOWED_ORIGINS: [
		'http://127.0.0.1:8001',
		'http://localhost:8001',
		'null' // this will allow to use the FILE protocol to view html and establish WS connection
	],

	// upgrade checks
	METHOD: "GET",
	VERSION:13,
	CONNECTION: "upgrade",
	UPGRADE: "websocket",

	GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",

	//WEBSOCKET RULES
	MIN_FRAME_SIZE: 2, //MEANS 2 BYTES which contains the header and payload length in websocket packet structure
	MASK_LENGTH: 4,
	// WEBSOCKET PAYLOAD RELATED FIELDS

	MEDIUM_DATA_FLAG: 126, // if payload header in WS frame (binary) is 11111110, or 126 (decimal), then the following 2 bytes represent the actual paylaod length
	LARGE_DATA_FLAG: 127, // if payload header in WS frame (binary) is 11111111, or 127 (decimal), then the following 8 bytes represent the actual paylaod length
	MEDIUM_SIZE_CONSUMPTION: 2,
	LARGE_SIZE_CONSUMPTION: 8,
};
