const hulu = require("express")
const { object } = require("zod")

const app = hulu()

//global middleware
let dabba = {}
app.use((req,res,next) => {
    const id = req.headers.userid

    if (!id) {
        return res.status(400).send("send id in headers")
    }

    const current = Date.now()
    if (!dabba[id]) {
        dabba[id] = {count: 1,start: current }
    } else {
      const difference = current - dabba[id].start

        if (difference < 5000) {
            dabba[id].count++ 
            if (dabba[id].count > 5) {
                return res.status(404).send(`user:${id} restricted`)
            }
        } else {
            dabba[id] = {count: 1,start: current}
        }
    }
    next()
})

//just for deleting the settled userids i.e memory efficiency
setInterval(() => { 
    for(let id in dabba) {
        const difference = Date.now() - dabba[id].start
        if (difference > 5000) {
            delete dabba[id]
        }
    } 
}, 5000);


app.get("/",function (req,res) {
    res.send("route hitt")
})



app.listen(3000)

