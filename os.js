const os = require('os');

//Platform, to know the platform of our OS
console.log(os.platform());

//CPU ARCHITECTURE
console.log(os.arch());

//CPU COre Info
console.log(os.cpus());

//Free memory
console.log(os.totalmem());

//Home Directory
console.log(os.homedir());

//Uptime
console.log(os.uptime());