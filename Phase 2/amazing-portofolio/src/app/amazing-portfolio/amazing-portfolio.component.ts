import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-amazing-portfolio',
  templateUrl: './amazing-portfolio.component.html',
  styleUrls: ['./amazing-portfolio.component.css']
})


export class AmazingPortfolioComponent implements OnInit {
  
  arr:Array<Contact> =[];
  
  registerPage:boolean=true;
  loginPage:boolean=false;
  portofolioPage:boolean=false;
  
  usern: string="";
  pass:string="";

  fName:string ="";
  lName:string="";


  constructor() { }

  ngOnInit(): void {
  }
  
  checkUser(loginRef:NgForm){
    let info = loginRef.value;
    if( info.user == this.usern && info.pass == this.pass){
        console.log("Success")
        this.registerPage=false;
        this.loginPage=false;
        this.portofolioPage=true;
    }else{
      alert("Log in Fail...")
    }
  }

  registerUser(regRef:NgForm){

    let register = regRef.value;

    this.usern = register.user;
    this.pass = register.pass;
    if(this.usern=="" || this.usern==undefined){
        alert("Sign up Please");
    }

    this.registerPage=false;
    this.loginPage=true;
    this.portofolioPage=false;
    regRef.reset();
    
  }

  disTable(porRef:NgForm){
     let info=porRef.value;
    let temp:Contact={name:info.name,phone:info.phone}
    this.arr.push(temp);

    this.registerPage=false;
    this.loginPage=false;
    this.portofolioPage=true;

    porRef.reset();
      

  }

  switch(){
    if(this.loginPage==false){

      this.loginPage = true;
      this.registerPage=false;
      this.portofolioPage=false;

    }else{

      this.loginPage = false;
      this.registerPage=true;
      this.portofolioPage=false;
      
    }

  }


}
