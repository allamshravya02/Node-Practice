const fs=require("fs")
console.log("File System Environment")
fs.readFile("read.txt","utf-8",(err,data)=>{
    if(err){
        console.log("This file cannot be readed")
    }
    console.log(data)
})
fs.writeFile("write.txt","To the Students of Cvr College ",(err)=>{
    if(err){
        console.log("This file cannot be readed")
    }
    console.log("File written successfully")
})
fs.unlink("write1.txt",(err)=>{
    if(err){
        console.log("Error in unlinking file")
    }
})
console.log("File Deleted successfully")
fs.readFileSync("read1.txt","utf-8",(err,data)=>{
    if(err){
        console.log("This file cannot be readed")
        return;
    }
    console.log(data)
})
console.group("Reading..")
fs.writeFileSync("write1.txt","To the Students of Cvr College,The extended Family",(err)=>{
    if(err){
        console.log("This file cannot be readed")
        return;
    }
    console.log("File written successfully")
})
console.log("File Reading and Writing")
fs.appendFileSync("write1.txt","This is Sync attached to file",(err)=>{
    if (err){
        console.log("Error")
        return;
    }
    console.log("File appended")
})
console.log("Is it real")