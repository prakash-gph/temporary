import express from"express"


const app = express()

app.use("/",(req,res)=>{
    res.json("api is running")
})



app.listen(8000,()=>console.log("server is running http://localhost:8000"))