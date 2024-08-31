import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  users : User;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users=  new User();
      
  }

  saveUser(){
    this.userService.addUsers(this.users).subscribe(data =>{
      console.log(data);
     this.gotoUserlist();
    },
    error => console.log(error));
  }

  gotoUserlist(){
    this.router.navigate(['/user-list']);
  }

  
  onSubmit() {
   this.saveUser();
  }
}