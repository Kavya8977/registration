import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  emailId:String
  password:String
  role:String
  msg='';

  constructor(private authService:AuthService,private service: RegistrationService, private router:Router,private httpClient:HttpClient) { }

  ngOnInit() { }

  loginUser() {
    const credentials = { emailId: this.emailId, password: this.password };
    console.log(this.emailId)
    console.log(this.password)
    this.httpClient.get(`http://localhost:8090/users/loginUser?emailId=${this.emailId}&password=${this.password}`).subscribe(
      (response: any) => {
        // Check if the response contains user data
        if (response && response.id && response.emailId) {
          // Compare the email and password from the response with user-entered values
          if (response.emailId === this.emailId && response.password === this.password) {
            // If email and password match, navigate to 'loginsuccess' page
            console.log('Login successful');
            this.router.navigate(['/home']);
          } else {
            // If email or password doesn't match, show error message
            console.log('Email or password mismatch');
            this.msg = 'Bad Credentials, please enter valid email and password';
          }
        } else {
          // If the response doesn't contain user data, show error message
          console.log('Invalid response from server');
          this.msg = 'Invalid response from server';
        }
      },
      error => {
        // Handle HTTP error
        console.log('Exception occurred:', error);
        this.msg = 'Error occurred during login. Please try again later.';
      }
    );
  }
  gotoregistration(){
   this.router.navigate(['/registration'])
  }

}

