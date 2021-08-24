let input=require("readline-sync")
let fs=require("fs");
const { debug } = require("console");

function addRecord(){
    let records=[];
    debugger;
    let fName=input.question("Whats is Your First Name: ")
    let lName=input.question("Whats is Your Last Name: ")
    debugger;
    let gender=input.question("Whats is Your Gender: ")
    let email=input.questionEMail("Whats is Your email: ")
    debugger;
    let date= new Date()
    let fullDate = date.getDay()+"-"+date.getMonth()+"-"+date.getFullYear();
    let Ntime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    
    fullDate=fullDate+"  "+Ntime

    let detail = {fName:fName,lName:lName,gender:gender,email:email,date:fullDate}
    debugger;
    records.push(detail)
    let data=JSON.parse(fs.readFileSync("detail.json").toString())
    debugger;
    data.push(detail);
    // data.push("\n")
    fs.writeFileSync("detail.json",JSON.stringify(data))
}

addRecord();