const tulu = require("express")
const jwt = require("jsonwebtoken")
const jwtkey = "secret"
const z = require("zod")

const app = tulu()

app.use(tulu.json())

const zodschema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

app.post("/",(req,res) => {
    const {email,password} = req.body
    const result = zodschema.safeParse({email,password})

    if (result.success) {
        const token = jwt.sign({email,password},jwtkey)
        res.status(200).json({success: true,token})
    } else {
        res.status(403).json({success: false,mssg: "invalid credentials"})
    }
})

app.get("/verifytoken",(req,res) => {
    const token = req.headers.authorization

    const result = jwt.verify(token,jwtkey)

    if (result) {
        res.json({success: true})
    } else {
        res.json({success: false})
    }
})

app.get("/decodetoken",(req,res) => {
    const token = req.headers.authorization

    const decoded = jwt.decode(token,{complete: true})

    if (decoded) {
        const payload = decoded.payload
        res.json({success: true,payload})
    } else {
        res.json({success: false,mssg: "unable to decode jwt"})
    }
})

app.listen(3000)