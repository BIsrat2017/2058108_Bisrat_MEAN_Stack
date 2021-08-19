import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './test.model';


@Injectable({
    providedIn: 'root'
  })

  export class ExamService{
      constructor(public exam:HttpClient){}

      getQuestion():Observable<Question[]>{
        return this.exam.get<Question[]>("/assets/file.json")
      }

  }