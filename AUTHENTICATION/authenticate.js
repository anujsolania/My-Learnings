const express = require("express")

const app = express()

app.get("/health-checkup", function(req,res) {
    //authetication
    const username = req.headers.username
    const password = req.headers.password
    //input validation
    const kidneyid = req.query.kidneyid

    if (!(username==="harkirat" && password==="pass")) {
        res.status(400).json({mssg: "Not authenticated"})
        return
    }
    if (!(kidneyid==1 || kidneyid==2)) {
        res.status(400).json({mssg: "Wrnong input"})
        return
    }
    res.json({
        mssg: "Your kidney is fine"
    })
})

app.listen(3000)