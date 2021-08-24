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
    let date=Date().toString()
    let detail = {fName:fName,lName:lName,gender:gender,email:email,date:date}
    debugger;
    records.push(detail)
    let data=JSON.parse(fs.readFileSync("detail.json").toString())
    debugger;
    data.push(detail);
    // data.push("\n")
    fs.writeFileSync("detail.json",JSON.stringify(data))
}

addRecord();