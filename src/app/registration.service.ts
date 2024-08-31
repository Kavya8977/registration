import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import{HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  constructor(private http:HttpClient) { }
  // loginUserFromRemote(emailId:String,password:String):Observable<object>{
  // return this.http.get(`http://localhost:8090/registerusers/loginUser?emailId=${this.emailId}&password=${this.password}`)
  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/users/adduser",user);
  }
}
