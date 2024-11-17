const mongoose = require("mongoose")
// import { mongoose } from "mongoose";
const AutoIncrement = require('mongoose-sequence')(mongoose);

mongoose.connect("mongodb+srv://anujsolania:scam2022@cluster0.kvu08ja.mongodb.net/REVCourseSellingApp")
.then(() => {console.log("connected to mongoDB")})
.catch((err) => {console.log("unable to connect to mongoDB"+ err.message)})

const adminschema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: Number, required: true}
})

const userschema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: Number, required: true},
    puchasedcourses: Object
})

const courseschema = new mongoose.Schema({
    ID: {type: Number},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    author: {type: mongoose.Schema.Types.ObjectId,ref: "User",required: false} //referred to "User" document
})
courseschema.plugin(AutoIncrement,{inc_field: "ID"})

const Admin = new mongoose.model("admin",adminschema)
const User = new mongoose.model("user",userschema)
const Course = new mongoose.model("course",courseschema)


module.exports = { Admin, User, Course }