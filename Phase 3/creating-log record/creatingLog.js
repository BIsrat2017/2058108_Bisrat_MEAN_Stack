let input=require("readline-sync")
let fs=require("fs");
const { debug } = require("console");

function addRecord(){
    let records=[];
    let fName=input.question("Whats is Your First Name: ")
    let lName=input.question("Whats is Your Last Name: ")
    debug;
    let gender=input.question("Whats is Your Gender: ")
    let email=input.questionEMail("Whats is Your email: ")
    let date=Date().toString()

    let detail = {fName:fName,lName:lName,gender:gender,email:email,date:date}
    records.push(detail)
    let data=JSON.parse(fs.readFileSync("detail.json").toString())
    data.push(detail);
    // data.push("\n")
    fs.writeFileSync("detail.json",JSON.stringify(data))
}

addRecord();