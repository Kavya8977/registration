import { Component, OnInit } from '@angular/core';
import { Organization } from '../organization';
import { OrganizationService } from '../organization.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css']
})
export class OrganizationDetailsComponent implements OnInit {
  id:number;
   organization:Organization=new Organization();
  constructor(private organizationService:OrganizationService,private route:ActivatedRoute){}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.organizationService.getOrganizationById(this.id).subscribe(data=>{
    this.organization=data;
    console.log(data);
  })
}
}