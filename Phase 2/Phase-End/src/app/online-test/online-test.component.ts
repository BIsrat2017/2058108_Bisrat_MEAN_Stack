import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Question } from '../test.model';
import { ExamService } from '../test.service';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {

  arr:Array<Question>=[];
  correctCounter:number=0;
  testActive:boolean=false;
  diplay:boolean=true;
  testSubmited:boolean=false;

  disable:boolean=true;

  myForm:FormGroup;

  selected:boolean=false;

  msg:string="";

  constructor(public examSer:ExamService, public form:FormBuilder) { 
    this.myForm=form.group({});
  }

  ngOnInit(): void {
    
  }

  diplayTest(){
    this.examSer.getQuestion().subscribe(result=> {
      this.arr=result;
      result.forEach(q=>{
        this.myForm?.addControl(q.question,this.form.control(""))
      });

    });
    this.diplay=false;
    this.testSubmited=false;
    this.testActive=true;
  }

  displayResult(){
    //let choice = this.myForm.value;

    console.log(this.myForm);
    //console.log(this.arr[1].answer);
    document.getElementsByTagName(this.arr[1].question);
   for(let i=0;i<this.arr.length;i++){

      if(this.arr[i].answer == this.myForm.value[this.arr[i].question]){
        this.correctCounter++;
        this.arr[i].answer="Correct Answer!!!";
      }else{
        this.arr[i].answer="Wrong Answer!!! ... The Correct Answer is "+ this.arr[i].answer;
      }

    }
    this.diplay=false;
    this.testSubmited=true;
    this.testActive=false;
    this.disable=true;
  }

  percent():string{

    let res= (this.correctCounter/this.arr.length)*100;
    if(res>=70){
      return res.toFixed(2) + " Pass!!"
    }else{
      return res.toFixed(2) + " Fail!!!"
    }
  }

}
