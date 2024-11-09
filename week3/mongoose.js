const dablu = require("mongoose")

dablu.connect("mongodb+srv://anujsolania:scam2022@cluster0.kvu08ja.mongodb.net/helloMongo")
.then(() => {console.log("connected to mongoDB")})
.catch((err) => {console.error("couldn't connect",err)})

const schema = ({           
    // name: {type: String,required: true},
    name: String,
    age: Number,
})                                         //schema defined

const model = dablu.model("user",schema)   //model created

const user = new model({
    name: "anuj",
    age: 22
})                                         //model used 

user.save()
.then((value) => {console.log("user data saved",value)})
.catch((err) => {console.error(err)})      //user saved

