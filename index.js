import express from"express"


const app = express()

app.use("/",(req,res)=>{
    res.json("api is running")
})



app.listen(9000,()=>console.log("server is running http://localhost:9000"))