let express = require("express")
let mongoClient = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

let app=express()

let http = require("http").Server(app)

let socket = require("socket.io")(http)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }


socket.on("connection",(io)=>{
            //console.log("client connected");
    io.on("obj2",(sname)=>{
        io.on("obj3",(smsg)=>{
            console.log("Name :"+sname);
            console.log("Msg :"+smsg);
            mongoClient.connect(url,(err,client)=>{
                if(!err){
                    console.log("connected")
                    let db = client.db("tcsmean")

                    db.collection("ChatLog").insertOne({name:sname,msg:smsg},(err,result)=>{
                        if(!err){
                            console.log("Record inserted successfully")
                            console.log(result);
                        }else{
            
                            console.log("Duplicate IDs");
                        }
                        client.close();
                    })
            
                }else{
                    console.log(err);
                }
            })
                        
        })      
    })
               
})



http.listen(1020,()=>{console.log("server running on port number 1020..!")})
