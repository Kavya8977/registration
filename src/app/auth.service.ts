import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private baseUrl='http://localhost:8090/auth';
  constructor(private http:HttpClient) { }
  loginUser(emailId:string,password:string):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`,{emailId,password}).pipe(
      tap(response=>{
        localStorage.setItem('accessToken',response.accessToken);
        localStorage.setItem('refreshToken',response.refreshToken);
      })
    );
  }
  logout():void{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
  isLoggedIn():boolean{
    return!!localStorage.getItem('accessToken');
  }
  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }
}
