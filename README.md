***In Progress**


	 	 	    --------------------------------------------------------------
	     	    	     ** Creating WebSocket Server and Client using Javascript **
	  	 	    --------------------------------------------------------------

```text
Concepts
------------------
Websocket is basically a protocol that allows a true bi-directional fast real time communication, because the websocket server can send the client data without client requesting it, while the client can also send data to the server. 
Websocket gets created with client initially sending HTTP GET request with and upgrade header, and after it's established, the client would then send a request to upgrade the connection to websocket.
```

```text
WebSocket Server
------------------
The WebSocket Server is created using Node.js. The basic functionality of the server is to grab the header of the request and listen to upgrade event from the client, which means checking if there's upgrade header with the value of websocket in client's request. Several other headers are also needed for upgrading the connection from HTTP to WebSocket (such as the sec-websocket-version, sec-websocket-key, sec-websocket-extensions, etc). When upgrade event is detected, this would trigger the on upgrade event listener, and the server would provide three objects which are the request object, raw tcp object (between the client and server), head buffer object, and then the callback function would be executed. If the client headers doesn't pass the check, then the server would need to send HTTP 400 response. If the checks are okay, then the server accept the websocket connection by sending a response with several headers (such as Status of HTTP/1.1 101 Switching Protocol, Upgrade Header field with value websocket, a Connection header field with value Upgrade, etc).
```

```text
WebSocket Client
------------------
The client is embedded in HTML file that utilize Javascript to listen for a click event and trigger WebSocket API provided by browser. This html file is being served by simple webserver using Python FastAPI framework.
```

