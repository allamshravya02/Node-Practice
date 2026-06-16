const http=require('http')
const server=http.createServer((req,res)=>{
    
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end("This is simple text file")
    }
    else if(req.url=='/html'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1> Welcome to cvr !</h1>")
        res.end("<p>Nice to meet you in html Endpoint</p>")
    }
    else if(req.url=='/json'){
         res.writeHead(200,{'Content-Type':'application/json'})
        const users=[{"Name":"Dhruthi","Sec":"E"},{"Name":"Sahithi","Sec":"C"}]
        res.end(JSON.stringify(users))
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end("404-Not Found")
    }
})
const port=3500
server.listen(port,()=>console.log(`Server running at ${port}`))