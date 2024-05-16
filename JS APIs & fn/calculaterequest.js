const express = require("express")
const app = express()



let noofrequest = 0
app.use(function (req,res,next) {
    noofrequest++
    console.log(noofrequest)
    next()
 })



app.listen(3000)