import express from"express"


const app = express()

app.use("/",(req,res)=>{
    res.json("api is running")
})



app.listen(1200,()=>console.log("server is running http://localhost:8000"))