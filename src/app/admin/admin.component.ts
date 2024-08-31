import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
adminLogin:Admin=new Admin();
msg:String='';
constructor(private http:HttpClient,private router:Router,private adminService:AdminService ){}

loginAdmin() {
  this.http.get(`http://localhost:8090/admin/login?adminName=${this.adminLogin.adminName}&password=${this.adminLogin.password}`)
    .subscribe((response: any) => {
      if (response != null) {
        if (response.adminName == this.adminLogin.adminName && response.password == this.adminLogin.password) {
          this.adminService.isLoggedIn = true;
          localStorage.clear();
          localStorage.setItem('adminData',JSON.stringify(response));
          alert("Admin login success....");
          this.router.navigate(['/home']);
        } else {
          this.msg = "Invalid credentials";
        }
      } else {
        this.msg = "Invalid credentials";
      }
    }, error => {
      this.msg = "An error occurred";
    });
}
}

export class Admin{
  id:number;
  emailId:String;
  adminName:String;
  password:String;
constructor(){
  this.id=0;
  this.password='';
  this.adminName="";
  this.emailId="";
}
}

