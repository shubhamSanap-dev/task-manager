import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newform:FormGroup
  constructor(private fb:FormBuilder, private http: HttpClient, private _router: Router ) {
    
   }

  ngOnInit() {
    this.newform=this.fb.group({
      username:['', [Validators.required, Validators.minLength(5)]],
      password:['', Validators.required],
      mobile:['',[ Validators.required]   ]   
    })
  }

  onsub(){
    this.http.post<any>("http://localhost:3000/newuser", this.newform.value).subscribe(res=>{
      alert('success');
      this.newform.reset();
      this._router.navigate(['./login']);
    }, err=>{
      alert('something went wrong')
    })
  }

}
