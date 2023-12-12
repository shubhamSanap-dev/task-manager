import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskformRoutingModule } from './taskform-routing.module';
import { TaskformComponent } from './taskform/taskform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';



@NgModule({
  declarations: [TaskformComponent],
  imports: [
    CommonModule,
    TaskformRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[TaskService]
})
export class TaskformModule { }
