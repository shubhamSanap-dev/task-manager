import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../taskform/services/auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform : FormGroup;
  userdata:any;
 
  constructor(private _router:Router, private _auth: AuthService , private _fb:FormBuilder, private http :HttpClient) {
    this.myform = this._fb.group({
      username : ['', [Validators.required, Validators.minLength(3)]],
      password : ['',  [Validators.required, Validators.minLength(6)]]
    })

   }

  ngOnInit() {
  }

  login(){
    this.http.get<any>("http://localhost:3000/newuser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.myform.value.username && a.password === this.myform.value.password 
      });
      if(user){
        localStorage.setItem('username','admin123');
        alert('Login Succesful');
        this.myform.reset();
        this._router.navigate(['/task-list']);
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }

  // login(userName:any, password:any){
  //   var res = this._auth.checkUserNamePass(userName, password);
  //   if (res == true) {
  //     window.alert('login succes');
  //     this._router.navigate(['/task-list']);
  //   }else{
  //     window.alert('please enter correct details')
  //     this._router.navigate(['./login'])
  //   }
  // }

}
