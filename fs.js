const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'),{}, err=>{
//     if(err) throw err;
//     console.log('Folder Created...');
// });

//Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'Hello, World!', err=>{
//     if(err) throw err;
//     console.log('File written...');
//     // so for writing both the files we can append it by doing this step
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),'I am the World!', err=>{
//         if(err) throw err;
//         console.log('File written...');
//     });
    
// });

//It writes the latest code in the file, will give I am the world
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),'I am the World!', err=>{
//     if(err) throw err;
//     console.log('File written...');
// });


//Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});

//Rename Filename
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'hello1.txt'), 
(err)=>{
    if(err) throw err;
    console.log('File renamed');
});