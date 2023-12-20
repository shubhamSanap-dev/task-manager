import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private taskservice: TaskService, private route: ActivatedRoute) { 
    this.myForm = this.fb.group({
      title: '',
      description: '',
      completed: '',
      dueDate: '',
      priority: '',
      assignee: '',
    });
  }

  ngOnInit() {
    console.log(this.route.snapshot.params);
    const taskId = this.route.snapshot.params.id;
    if (taskId) {
      this.taskservice.getCurrentData(taskId).subscribe(res => {
        this.myForm = this.fb.group({
          title: res['title'],
          description: res['description'],
          completed: res['completed'],
          dueDate: res['dueDate'],
          priority: res['priority'],
          assignee: res['assignee'],
        });
      });
    }
  }

  submit() {
    if (this.myForm.valid) {
      this.taskservice.getData1(this.myForm.value).subscribe(val => {
        alert('submitted');
      });
    }
  }

  update(){
    this.taskservice.edit( this.route.snapshot.params.id, this.myForm.value).subscribe(val =>{
      alert('Updated');
      
    })
  }

  signout() {
    localStorage.clear();
  }
}
