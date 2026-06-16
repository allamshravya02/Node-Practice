const os=require("os")

console.log("Os Environment")

console.log("Architecture:"+os.arch())
console.log("Platform:"+os.platform()) 
console.log("CPU's:"+os.endianness)