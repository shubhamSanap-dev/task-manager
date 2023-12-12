import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../services/task.service';



@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private taskservice: TaskService) { 
    this.myForm=this.fb.group({
      title:'',
      description:'',
      completed:'',
      dueDate: '',
      priority:'',
      assignee:'',
    })
    
  }
  ngOnInit() {
 
  }

  


  

  submit(){
   if (this.myForm.valid) {
     this.taskservice.getData1(this.myForm.value).subscribe(val=>{
       alert('submitted')
     })
     
   }
  }

  signout(){
    localStorage.clear();
  }

}
