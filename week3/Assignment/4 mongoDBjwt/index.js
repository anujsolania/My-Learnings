const express = require("express")
const adminrouter = require("./routes/admin")
const userrouter = require("./routes/user")

const app = express()

app.use(express.json())

app.use("/admin",adminrouter)
app.use("/user",userrouter)

app.use((err,req,res,next) => {
    res.json({message: err.message,
        stack: err.stack,
        error: err})
})

app.listen(3000)