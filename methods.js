const crypto=require('crypto');
const CONSTANTS=require("./constants");

function isOriginAllowed(origin) {
	console.log("origin: " + origin);
	return CONSTANTS.ALLOWED_ORIGINS.includes(origin);
};

function check(socket, upgradeHeaderCheck, connectionHeaderCheck, methodCheck, originCheck) {
	console.log("upgradeHeaderCheck: " + upgradeHeaderCheck);
	console.log("connectionHeaderCheck: " +connectionHeaderCheck);
	console.log("methodCheck: " + methodCheck);
	console.log("originCheck: " + originCheck);
	if(upgradeHeaderCheck && connectionHeaderCheck && methodCheck && originCheck) {
		return true;
	} else {
		//throw new Error("Can't connect. The HTTP headers are not in accordance with spec");
		const message="400 bad request. The http headers doesn't seem to comply";
		const messageLength=message.length;
		const response=`HTTP/1.1 400 Bad Request\r\n` + `Content-Type: text/plain\r\n` + `Content-Length: ${messageLength}\r\n`+ `\r\n` + message;
		socket.write(response); //sending the message/response back to the client
		socket.end(); // this will close the TCP conn and keep the server running
	};
};


// define server opening handshake headers function
function createUpgradeHeaders(clientKey) {
	//generate server accept key
	let serverKey=generateServerKey(clientKey);
	let headers = [
		'HTTP/1.1 101 Switching Protocols',
		'Upgrade: websocket',
		'Connection: Upgrade',
		`Sec-WebSocket-Accept:${serverKey}`
	];
	const upgradeHeaders=headers.join('\r\n') + '\r\n\r\n';
	return upgradeHeaders;
};

//generating server accept key
function generateServerKey(clientKey) {
	//first step is to concat/join the client key with GUID
	let data=clientKey+CONSTANTS.GUID;
	//2nd step is to hash the data
	const hash = crypto.createHash('sha1');
	hash.update(data);
	// final step is to digest the data into base64
	let serverKey=hash.digest('base64');
	return serverKey;

};

// EXPORT METHODS

module.exports={
	isOriginAllowed,
	check,
	createUpgradeHeaders,
}
