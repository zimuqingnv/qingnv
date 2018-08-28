const express = require('express')
const path = require('path')

const accountRouter = express.Router();

const accountCTRL = require(path.join(__dirname,"../controllers/accountController.js"))


accountRouter.get('/login',accountCTRL.getLoginPage)

accountRouter.get('./register',accountCTRL.getRegisterPage)

accountRouter.post('/register',accountCTRL.register)

module.exports = accountRouter