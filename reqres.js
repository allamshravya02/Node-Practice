const http=require("http")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    if (req.url=='/'){
        res.write("<p>Elements to be fetched in / endpoint</p>")
        res.end()
    }
    else if(req.url=='/html'){
        res.write("<h2>The end point of html</h2>")
        res.end()
    }
    else if(req.url==='/users'){
        res.write("users not Found")
        res.end()
    }
    else{
        res.end("404-NOT FOUND")
    }
})
server.listen(4000,()=>console.log("Server running at port 4000"))