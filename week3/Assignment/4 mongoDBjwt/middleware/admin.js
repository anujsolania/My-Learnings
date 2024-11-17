const {jwt,jwtkey} = require("../jwt/jwt")

function middleware(req,res,next) {
    const token = req.headers.authorization

    if (!(token)) {
        return res.send("send the token")
    }
    const decoded = jwt.verify(token,jwtkey) //verify returns the payload
    
    if (decoded) {
        next()
    } else {
        return res.send("Token not verified")
    } 
}

module.exports = middleware
