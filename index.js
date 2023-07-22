const http = require("http")
const url = require('url')
const fs = require('fs')
const data = fs.readFileSync("./dev-data/data.json","utf-8")
console.log(data);
http.createServer((req,res) => {
   const pathName = req.url
    if(pathName === '/'){
        res.end('Welcome!')
    }else if(pathName === '/overview'){
        res.end('welcome to the overview!')
    }else if(pathName === '/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        JSON.parse(data)
        res.end(data)
        
    }
    res.end('hello world')
}).listen(3000)

