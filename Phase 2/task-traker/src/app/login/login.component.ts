import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskInfo } from '../TaskInfo.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  arr:Array<TaskInfo>=[];
  constructor() { }   // DI for Login Service

  ngOnInit(): void {
  }
  msg?:string=""
  setTask(taskRef:NgForm){
    let taskInfo=taskRef.value;
    let tempTask:TaskInfo={id:taskInfo.id,name:taskInfo.name,task:taskInfo.task,deadLine:taskInfo.date}
    this.arr.push(tempTask);
  }
}
