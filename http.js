const http = require('http');

//Create server object
http.createServer((req, res) => {
    //Write a response
    res.write('Hello bro');
    res.end()
}).listen(5000, () => console.log('Server is running!'));