import express, { Express } from "express";
import  cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { Jwt, JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "secret123"

const app: Express = express();

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.post("/signin",(req,res) => {
    const {username,password }= req.body

    const token = jwt.sign({userid: 1}, JWT_SECRET)
    res.cookie("token", token )
    res.send("Logged innn")
})

app.get("/user",(req,res) => {
    const token = req.headers.cookie

    const verified = jwt.verify(token!, JWT_SECRET) as JwtPayload
    res.send(verified.userid)
})

app.post("/logout", (req, res) => {
    res.cookie("token", "/");
    res.json({
        message: "Logged out!"
    })
});

app.listen(3000,() => {
    console.log("server running at 3000")
})