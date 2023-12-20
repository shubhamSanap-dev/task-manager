import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formdata } from '../taskform/taskform';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private Url ="http://localhost:3000/tasks";
  constructor(private _path : HttpClient) { }

  getData1(data: any): Observable<any>{
    return this._path.post(this.Url, data);
  }

  getdata():Observable<any>{
    return this._path.get(this.Url)
  }

  delete(id:any):Observable<any>{
    let apiurl = `${this.Url}/${id}`;
    return this._path.delete(apiurl)
  }

  edit(id:any,data:any):Observable<any>{
    return this._path.put(`${this.Url}/${id}`, data)
  }

  getCurrentData(id){
    return this._path.get(`${this.Url}/${id}`)
  }
  

}
