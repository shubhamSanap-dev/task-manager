import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/taskform/services/task.service';
import { log } from 'util';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  items: any;

  constructor( private taskservice:TaskService) {
    this.data1();
   }

  data1(){
    this.taskservice.getdata().subscribe(val=>{
      this.items = val;
    })
  }

  del(id:any){
    this.taskservice.delete(id).subscribe(res=>{
      this.data1();
    })
  }

  // update( ){
  //   this.taskservice.edit(item.id, data)
  // }

  ngOnInit() {
  }

}
