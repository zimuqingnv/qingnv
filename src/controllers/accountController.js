const path = require('path')

const MongoClient = require("mongodb").MongoClient;
// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "qingnv";
exports.getLoginPage= (req,res) =>{
    res.sendFile(path.join(__dirname,"../statics/views/login.html"))
}

exports.getRegisterPage = (req,res)=>{
    res.sendFile(path.join(__dirname,"../statics/views/register.html"))
}

exports.register = (req,res) =>{
    const result = {status:0,message:"注册成功"}
    MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {
       
        const db = client.db(dbName);

        const collection = db.collection("accountInfo");

        collection.findOne({username:req.body.username},(err,doc)=>{
            if(doc){
                client.close();
                result.status = 1;
                result.message = "用户名已存在";
                res.join(result);
            }else{
                collection.insertOne(req.body,(err,result2)=>{
                    client.close();
                    if(result == null){
                        result.status = 2;
                        result.message = "注册失败"
                    }
                    res.join(result);
                })
            }
        })
       
        
      });
}