let express = require("express")
let mongoose = require ("mongoose")
let bodyParser = require("body-parser")


let url = "mongodb://localhost:27017/tcsmean"
mongoose.pluralize(null);

mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))

//let db = mongoose.connection;

let app=express()
app.use(bodyParser.urlencoded({extended:true}))

let http = require("http").Server(app)

// let socket = require("socket.io")(http)

let courseSchima = mongoose.Schema({
    _id:Number,
    name:String,
    description:String,
    amount:Number
})
let courseModel = mongoose.model("Course",courseSchima);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/addCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/addCourse.html")
})

app.post("/addnew",(request, response)=>{
        let cc = request.body;

        //console.log(cc);
        let c = new courseModel({ _id : cc.id, name:cc.name, description:cc.desc, amount:cc.amount});
    
        courseModel.insertMany(c, (err,res)=>{
            if(!err){
              console.log(res);
            }else{
                console.log(err);
            }
            // mongoose.disconnect();
        })
        response.sendFile(__dirname+"/index.html");

    })


app.get("/updateCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/updateCourse.html")
})

app.get("/updateCourse",(request, response)=>{
        let updateId = request.query['id'];
        let updateAmount = request.query['amount'];
        console.log(updateId+" "+ updateAmount);
        courseModel.updateOne({_id : updateId},{$set:{amount: updateAmount}}, (err, result)=>{
            if(!err){
                console.log(result.modifiedCount)
                response.sendFile(__dirname+"/index.html");
            }else{
                console.log(err);
            }
        })
})

app.get("/deleteCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/deleteCourse.html")
})

app.get("/deleted",(req,res)=>{
    let id=req.query['id']

    courseModel.deleteOne({_id:id},(err,result)=>{
        if(!err){
            console.log(result)
            res.sendFile(__dirname+"/index.html");
        }else{
            res.send(err);
        }
    })
})

app.get("/fetchCourses.html",(req, res)=>{
    let fetchAll = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h2>List of All Added Courses</h2>
        <table border=1 style="width: 70%;">
        <tr><th>Course ID</th><th>Course Name</th><th>Course Description</th><th>Amount</th></tr>`
      
    courseModel.find({},(err,result)=> {
        if(!err){
            for (let i = 0; i < result.length; i++) {
                fetchAll+= `<tr><td>`+ result[i]._id+`</td><td>`+result[i].name+`</td><td>`+result[i].description+`</td><td>`+result[i].amount+`</td></tr>`
            }   
            fetchAll+= `</table>
                    <a href="/">Back to Main Page</a>
                    </body>
                    </html>` ;
            
            res.send(fetchAll);
            
        }else {
             res.json(err);   
        }
    })
})




//mongoose.disconnect();



http.listen(1020,()=>{console.log("server running on port number 1020..!")})