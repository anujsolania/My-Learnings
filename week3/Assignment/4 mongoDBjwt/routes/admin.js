const express = require("express")
const router = express.Router()

const { Admin,Course} = require("../db/db")
const adminmiddleware = require("../middleware/admin")
const { jwt, jwtkey } = require("../jwt/jwt")

//SIGNUP
router.post("/signup",async (req,res) => {
    const username = req.headers.username
    const password = req.headers.password

    if (!(username && password)) {
        return res.send("send username and password")
    }
    const result = await Admin.findOne({username})
    if (result) {
        return res.send("Admin already exists")
    }

    await Admin.create({
        username: username,
        password: password
    })
    res.json({ message: 'Admin created successfully' })
})

//SIGNIN
router.post("/signin",async (req,res) => {
    const username = req.headers.username
    const password = req.headers.password

    if (!(username && password)) {
        return res.send("send username and password")
    }
    const result = await Admin.findOne({username})
    if (!result) {
        return res.send("Admin doesnt exists")
    }
    const token = jwt.sign({username},jwtkey) //jwt always accepts payload as object
    res.json({ message: `Admin signedin succesfully as ${username}`,token })
})

//CREATE COURSES
router.post("/courses",adminmiddleware,(req,res) => {
    const {title,description,price} = req.body

    if (!(title && description && price)) {
        return res.send("send the required details")
    }

    Course.create({
        title,
        description,
        price
    })
    .then((value) => {res.json({ message: 'Course created successfully', courseObjId: value._id })})
    .catch((err) => {res.send("unable to save the course"+ err)})
})

//GET COURSES
router.get("/courses",adminmiddleware,(req,res) => {

    Course.find()
    .then((courses) => {res.json({success: true,courses})})
    .catch((err) => {res.send("unable to find courses"+ err)})

})

module.exports = router