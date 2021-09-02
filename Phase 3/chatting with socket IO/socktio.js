let express = require("express")

let app=express()

let http = require("http").Server(app)

let socket = require("socket.io")(http)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

socket.on("connection",(io)=>{
    //console.log("client connected");

    arr=["Hello,How are you?",
         "Have a great day?",
         "Machine, Whats your name?",
         "Inifnit, how about you?",
         "Hello,How can i help you?",
         "I hope you found this Helpful?",
        "Have a great day?",
        ];


    let date= new Date();

    // io.on("obj1",(msg)=>{
    //     console.log(msg);
    // })
    var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      };
    var timeString = date.toLocaleString('en-US', options);

    io.on("obj2",(msg)=>{
        console.log("Hello "+msg);
    })
    io.on("obj3",(msg)=>{
        console.log("Client :"+msg);
    })
    
    var rand=getRandomInt(6);
    io.emit("obj1",timeString+", "+arr[rand])

   console.log("Server :"+arr[rand]);
    
})



http.listen(1020,()=>{console.log("server running on port number 1020..!")})
