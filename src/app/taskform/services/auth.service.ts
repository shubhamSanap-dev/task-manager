import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private usersUrl = "http://localhost:3000/newuser";
  constructor(private http:HttpClient) {
      
   }

  // checkUserNamePass(username:string, password:string){
  //   if (username == 'admin' && password ==  'admin') {
  //     localStorage.setItem('username','admin123');
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }
  getbycode(code: any){
    return this.http.get(this.usersUrl+'/'+code);
     
   
  }

  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

 
}
