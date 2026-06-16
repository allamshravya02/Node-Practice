const express=require('express')
const app=express()
app.use(express.json())
let  users=[{"id":1,"Name":"Dhruthi","Branch":"CSE"},{"id":2,"Name":"Sahithi","Branch":"CSM"},{"id":3,"Name":"Sahini","Branch":"CSD"}]

app.get('/',(req,res)=>{
    res.send("Users Data")
})
//Get Method for all users
app.get('/users',(req,res)=>{
    res.json(users)
})
//Get Method using id
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users.find(u=>u.id==id)
    if(!user){
        res.status(404).json({"Message":"User Not Found"})
    }
    res.status(200).json(user)
})
//Post Method to get users
app.post('/users/add',(req,res)=>{
    let newuser=req.body
    users.push(newuser)
    res.send("User Added")
})
//Delete user
app.delete("/users/:id",(req,res)=>{
    const id=req.params.id
    users=users.filter(u=>u.id!=id)
    res.send("User Deleted")
    res.status(200).json(users)
})
//Put method
app.put("/users/:id",(req,res)=>{
    const id=req.params.id
    const us=req.body
    const index=users.findIndex(u=>u.id==id)
    users[index]={...users[index],...us}
    res.json(users[index])
})
app.listen(3000,()=>console.log("Server running at port 3000"))