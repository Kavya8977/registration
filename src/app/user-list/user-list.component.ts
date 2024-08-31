import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {
  user: User[];
  isAdmin:boolean=false;
  filterData:User[];
  searchQuery:any
   userdetails(id: number) {
this.router.navigate(['/user-details',id])
}
updatedetails(id: number) {
this.router.navigate(['/update-user',id])
}



  constructor(private userService: UserService,private router:Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.UserList();
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }
    this.getUsers();
      
  }
  UserList(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.user=data;
      console.log(data);
      this.router.navigate(['/user-list']);
    });
  }

  getUsers(){
    this.userService.getAllUsers().subscribe(data =>{
      this.user=data;
      console.log(data);
      
    })
  }

  deletedetails(id: number) {
    this.userService.deleteUsers(id).subscribe(data =>{
      console.log(data);
      this.getUsers();
      this.router.navigate(['/users']);
    })
  }
  // onSearch(event:Event){
  //   event.preventDefault();
  //   if(this.searchQuery){
  //     this.filterData=this.user.filter(data=>
  //       data.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     )
  //   }else{
  //     this.user=this.filterData;
  //   }
    
  //  }
}