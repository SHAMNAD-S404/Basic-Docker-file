 
const http = require('http')

const server = http.createServer((req,res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    res.end("Hello guys im docker first project");

    
})


server.listen(3000,()=> {
        console.log('server is listening for http://localhost:3000');
        
    })