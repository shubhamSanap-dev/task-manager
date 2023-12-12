import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full' },
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'task-list',canActivate:[AuthGuard],  loadChildren:()=>import('./tasklist/tasklist.module').then(m=>m.TasklistModule)},
  {path:'task-form',canActivate:[AuthGuard],  loadChildren:()=>import('./taskform/taskform.module').then(m=>m.TaskformModule)},
  
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
