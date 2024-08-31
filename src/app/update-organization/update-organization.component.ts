import { Component } from '@angular/core';
import { Organization } from '../organization';
import { OrganizationService } from '../organization.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-organization',
  templateUrl: './update-organization.component.html',
  styleUrls: ['./update-organization.component.css']
})
export class UpdateOrganizationComponent {
  id:number;
  organization:Organization=new Organization();


  constructor(private organizationService:OrganizationService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.organizationService.getOrganizationById(this.id).subscribe(data=>{
      this. organization=data;
    },error => console.log(error));
}

onSubmit(){
  this. organizationService.updateOrganization(this.id, this. organization).subscribe(data =>{
    this.gotoOrganizationList();
  },error => console.log(error));
}

gotoOrganizationList(){
  this.router.navigate(['/organization-list'])
}
}