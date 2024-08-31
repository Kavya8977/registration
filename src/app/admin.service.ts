import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService   {
  isLoggedIn:boolean=false;
  private role: string;

  constructor(private http:HttpClient){}
 
  login(adminUserName:string,adminPassword:string):Observable<any>{
    const url=`http://localhost:8090/admin/login?adminUserName=${adminUserName}&adminPassword=${adminPassword}`;
    return this.http.get<any>(url) 
   }
   changePassword(id: number, oldPassword: string, newPassword: string): Observable<any> {
    const requestBody = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.http.put(`{http://localhost:8090/admin}/changePassword/${id}`, requestBody)
      .pipe(
        catchError(this.handleError)
      );
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

   setRole(role: string): void {
    this.role = role;
  }
  getRole(){
    return this.role;
  }

  isAdmin(): boolean {
    const data=localStorage.getItem('adminData');
    if(data!=null){
      return JSON.parse(data).role;
    }
    return this.role === 'user';
  }
}