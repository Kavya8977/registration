import { Component } from '@angular/core';
import { Organization } from '../organization';
import { Router,ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent {
  organization:Organization[];
  isAdmin:boolean=false;
  filterData:Organization[];
  searchQuery:any;
  
  
  organizationdetails(id:number){
    this.router.navigate(['/organization-details',id]);
  }
  updatedetails(id:number){
    this.router.navigate(['/update-organization',id]);
  }
  constructor(private  organizationService:  OrganizationService,private router:Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.OrganizationList();
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }

    this.getOrganizations();
      }

      OrganizationList(){
        this.organizationService.getAllOrganizations().subscribe((data)=>{
          this.organization=data;
          console.log(data);
          this.router.navigate(['/organization-list']);
        });
      } 

      getOrganizations(){
        this. organizationService.getAllOrganizations().subscribe(data =>{
          this. organization=data;
          this.filterData=data;
          console.log(data);
          
        })
      }
      deletedetails(id: number) {
        this. organizationService.DeleteOrganization(id).subscribe(data =>{
         console.log(data);
           this.getOrganizations();
           this.router.navigate(['/ organization-delete']);
         })
        }
        // onSearch(event:Event){
        //   event.preventDefault();
        //   if(this.searchQuery){
        //     this.filterData=this. organization.filter(data=>
        //       data. organizationName.toLowerCase().includes(this.searchQuery.toLowerCase())
        //     )
        //   }else{
        //     this. organization=this.filterData;
        //   }
          
        //  }
  }
  