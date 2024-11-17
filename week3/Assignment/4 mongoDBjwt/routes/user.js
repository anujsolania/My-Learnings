const express = require("express")
const router = express.Router()

const { User,Course} = require("../db/db")
const usermiddleware = require("../middleware/user")
const { jwt, jwtkey } = require("../jwt/jwt")


//SIGNUP
router.post("/signup",async (req,res) => {
    const username = req.headers.username
    const password = req.headers.password

    if (!(username && password)) {
        return res.send("send username and password")
    }
    const result = await User.findOne({username})
    if (result) {
        return res.send("User already exists")
    }

    await User.create({
        username,
        password
    })
    res.json({ message: 'User created successfully' })
})


//SIGNIN
router.post("/signin",async (req,res) => {
    const username = req.headers.username
    const password = req.headers.password

    if (!(username && password)) {
        return res.send("send username and password")
    }
    const result = await User.findOne({username})
    if (!result) {
        return res.send("User doesnt exists")
    }
    const token = jwt.sign({username},jwtkey) //jwt always accepts payload as object
    res.json({ message: `User signedin succesfully as ${username}`,token })
})


//GET COURSES
router.get("/courses",usermiddleware,(req,res) => {

    Course.find()
    .then((courses) => {res.json({success: true,courses})})
    .catch((err) => {res.send("unable to find courses"+err.message)})
})


//PURCHASE COURSE
router.post("/purchase/:courseID",usermiddleware,(req,res) => {
    const courseid = req.params.courseID
    const username = req.username
    

    if (!(courseid)) {
        return res.send("send courseID in params")
    }

    User.findOne({username})
    .then((user) => {
        const userid = user._id
        Course.updateOne({_id: courseid},{$push: {author: userid}})
        .then((course) => {res.send(`course purchased succesfully`)})
    })
    .catch((err) => {res.send("unable to find the user"+err.message)})
})


//GET PURCHASED COURSES
router.get("/purchasedcourses",usermiddleware,(req,res) => {
    const username = req.username

    User.findOne({username})
    .then((user) => {
        const userid = user._id
        Course.find({author: userid})
        .then((courses) => {res.json({purchasedcourses: courses})})
        .catch((err) => {res.send("unable to find courses"+err.message)})
    })
})



module.exports = router

