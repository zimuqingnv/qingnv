const path = require('path')
exports.getLoginPage= (req,res) =>{
    res.sendFile(path.join(__dirname,"../statics/views/login.html"))
}