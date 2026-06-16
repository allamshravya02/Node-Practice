const http=require('http')
const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write("Users Data in Detail")
        res.end()
    }
    // else if(req.url==='/users'){
    //     res.writeHead(200,{'Content-Type':'application/json'})
    //     res.write(JSON.stringify({"Name":"Surya","Roll":"5w6","Branch":"CSE"}))
    //     res.write(JSON.stringify({"Name":"Arya","Roll":"5y6","Branch":"CSM"}))
    //     res.write(JSON.stringify({"Name":"Shourya","Roll":"5w7","Branch":"CSD"}))
    //     res.end()
    // }
    else if(req.url==='/users'){
        res.writeHead(200,{'Content-Type':'application/json'})
        const users=[
        {"Name":"Surya","Roll":"5w6","Branch":"CSE"},
        {"Name":"Arya","Roll":"5y6","Branch":"CSM"},
        {"Name":"Shourya","Roll":"5w7","Branch":"CSD"}
        ]
        res.end(JSON.stringify(users))
    }
    else {
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("404-Not Found")
    }
})
server.listen(5000,()=>console.log("Server running.. at 5000"))