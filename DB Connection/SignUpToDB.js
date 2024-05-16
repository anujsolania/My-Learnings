const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://anujsolania:scam2022@cluster0.hc1q3xu.mongodb.net/userappnew")

const User = mongoose.model( 'Users',{ name: String, email: String, password: String })

app.post("/signup", async function (req,res) {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

    const existinguser = await User.findOne({ email: username })
    if(existinguser) {
        return res.status(400).send("Username already exists")
    }
    const user = new User({
        name: name,
        email: username,
        password: password
    })
    user.save()
    res.send(
        "User created successfully"
    )
})

app.listen(3000)
