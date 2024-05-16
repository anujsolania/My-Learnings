const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://anujsolania:scam2022@cluster0.hc1q3xu.mongodb.net/userappnew")

const User = mongoose.model('Users', { name: String, email: String, password: String})

const user = new User({
   name: 'Anuj Solania',
   email: 'anujsolania0507@gmal.com',
   password: '123456'
})

user.save()