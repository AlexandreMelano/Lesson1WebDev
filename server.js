//link to node's http library
const http = require('http');

//start a local web server on port 3000 and listen for events
http
    .createServer((request, response) => {
        response.writeHead(200);
        response.end("Our first node page");
    })
    .listen(999);

//print the server has started
console.log('Server running on port 3000')
