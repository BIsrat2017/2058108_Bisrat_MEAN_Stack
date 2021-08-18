import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskInfo } from '../info.module';

@Component({
  selector: 'app-tasks-main',
  templateUrl: './tasks-main.component.html',
  styleUrls: ['./tasks-main.component.css']
})
export class TasksMainComponent implements OnInit {
  arr:Array<TaskInfo>=[];
  dataSource:Array<TaskInfo>=[];
  displayedColumns: string[] = ['ID', 'Name', 'Task', 'Date'];
  constructor() { }   // DI for Login Service

  ngOnInit(): void {
  }
  msg?:string=""
  setTask(taskRef:NgForm){
    let taskInfo=taskRef.value;
    let tempTask:TaskInfo={id:taskInfo.id,name:taskInfo.name,task:taskInfo.task,deadLine:taskInfo.date}
    this.arr.push(tempTask);
    this.dataSource=this.arr;
  }

}
