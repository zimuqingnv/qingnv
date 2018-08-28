const express = require('express')
const path = require('path')

const app = express();

const accountRouter = require(path.join(__dirname,'./routers/accountRouter.js'))
app.use('./account',accountRouter)

app.listen(4000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('stark ok')
})