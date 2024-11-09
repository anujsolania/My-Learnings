const bablu = require("express")

const jwt = require("jsonwebtoken")
const jwtkey = "secret"
 
const app = bablu()

app.use(bablu.json())

app.post("/",(req,res) => {
    const username = req.body.username
    const password = req.body.password

    const token = jwt.sign({username: username},jwtkey)
    res.send(token)
})

app.get("/",(req,res) => {
    const token = req.headers.authorization

    try {
        const decoded = jwt.verify(token,jwtkey)
        res.send(decoded.username)
    } catch (error) {
        res.status(403).send("wrong token")
    }
})

app.listen(3000)