import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from './user';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='http://localhost:8090/users'
  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8090/users/getall');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8090/users/getuser/${id}`);
  }

  addUsers(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8090/users/add', user);
  }

  updateUsers(id: number, user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:8090/users/update/${id}`, user);
  }
  deleteUsers(id:number):Observable<Object>{
    return this.http.delete(`http://localhost:8090/users/delete/${id}`);
  }

  
  changePassword(id:number, oldPassword: string, newPassword: string): Observable<any> {
    const requestbody={
      oldPassword:oldPassword,
      newPassword:newPassword
    };
    return this.http.put(`${this.baseUrl}/changePassword/${id}`,requestbody).pipe(catchError(this.handleError));
}

private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = error.error;
  }
  return throwError(errorMessage);
  }

isLoggedIn(){
  let token=localStorage.getItem('userData');
  if(token!=null){
    return true;
  }else{
    return false;
  }
}
logout(){
  localStorage.removeItem('userData');
  return true;
}

getToken(){
  return localStorage.getItem("userData");
}
IsAuthentication(){
  if(localStorage.getItem('userData')!=null){
    return true;
  }else{
    return false;
  }
}

}