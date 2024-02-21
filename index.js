require('dotenv').config()
const express=require('express')

const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h2>This is About Us section</h2")
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})