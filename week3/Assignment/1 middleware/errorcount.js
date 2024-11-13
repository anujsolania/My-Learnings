const pulu = require("express")

const app = pulu()

let errorcount = 0

app.get("/error",(req,res) => {
    throw new Error("manual error");
})

app.get("/",(req,res) => {
    res.send(`route hitt Errorcount: ${errorcount}`)
})

app.use((err,req,res,next) => {
    errorcount++
    res.status(404).send("Error encountered")
})

app.listen(3000)