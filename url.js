const url = require('url');

const myUrl = new URL('https://www.saralb.com.np/home');

//Serialized URL
console.log(myUrl.href);

//Host (root domain)
console.log(myUrl.host);
//Host name
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);