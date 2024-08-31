import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  users : User=new User();

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.userService.getUserById(this.id).subscribe(data =>{
        this.users=data;
      },error => console.log(error));
  }
  
  onSubmit(){
    this.userService.updateUsers(this.id, this.users).subscribe(data =>{
      this.gotoUserslist();
    },error => console.log(error));
  }

  gotoUserslist(){
    this.router.navigate(['/user-list'])
  }
}