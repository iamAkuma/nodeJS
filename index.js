const http = require('http');
const fs = require('fs');
const path = require('path');

 const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(content);
//         });
//     }
//     if (req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(content);
//         });
//     }
//     if (req.url === '/api/users') {
//        const users = [
//         { name: 'Saral', age: 21
//         },
//         {name: 'akuma', age: 69}
//        ];
//        res.writeHead(200, { 'Content-Type': 'application/json' });
//        res.end(JSON.stringify(users));

//     }
// });

//Build File Path
let  filePath = path.join(
    __dirname,
     'public', 
     req.url=== '/' ? 'index.html': req.url);
console.log(filePath);
res.end();
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
