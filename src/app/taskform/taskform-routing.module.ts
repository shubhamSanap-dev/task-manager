import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskformComponent } from './taskform/taskform.component';


const routes: Routes = [
  {path:'', component:TaskformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskformRoutingModule { }
