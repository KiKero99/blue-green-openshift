/**
 * Created by mike on 15/08/15.
 */

var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;

server.start(router.route, handle);
