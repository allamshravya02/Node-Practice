const http = require('http');
const server1 = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, Everyone..!\n');
});
const PORT = 3000;
server1.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

 const http2 =require ('http');
 const server=http2.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'html'});
    res.end('<h1>Welcome to server Node!</h1>')
 });
 server.listen(5000,()=>{console.log("Server running");});