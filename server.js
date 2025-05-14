const express = require("express")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("Server is working")
})

app.post("/signup",(req,res)=>{
    const {username,email,password,dob} = req.body

    if(!username) return res.status(400).send("Username cannot be empty")
    if(!email) return res.status(400).send("Email cannot be empty")
    if(!dob) return res.status(400).send("DOB cannot be empty")
    if(!password || password.length<8 || password.length>16) return res.status(400).send("Password length should be greater than 8 or less than or equal to 16")

    return res.status(200).send("Signup is successfull")
})

app.listen(3000,()=>{
    console.log("server is running successfully")
})
