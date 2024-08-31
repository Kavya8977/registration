import { Component, OnInit } from '@angular/core';
import { Organization } from '../organization';
import { OrganizationService } from '../organization.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit{
 organizations:Organization=new Organization();
  constructor(private organizationService:OrganizationService,private router:Router){}

  ngOnInit(): void {
    this. organizations=new Organization;
  }
  saveOrganization(){
    this.organizationService.addOrganization(this. organizations).subscribe(data=>{
      console.log(data);
      this.gotoOrganizationList();
   },
   error=>console.log(error));
   }
   gotoOrganizationList(){
    this.router.navigate(['/organization-list']);
   }
   onSubmit(){
    this.saveOrganization();
   }
  
}

