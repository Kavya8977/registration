import { Component, OnInit } from '@angular/core';
import { CompanyInformation } from '../company-information';
import { CompanyService } from '../company.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit{
  company:CompanyInformation=new CompanyInformation();
  constructor(private companyService:CompanyService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    
  }
  saveCompanyInformation(){
   this.companyService.addCompanyInformation(this.company).subscribe(data=>{
    console.log(data);
    this.gotoCompanylist();
 },
 error=>console.log(error));
 }


 gotoCompanylist(){
  this.router.navigate(['/company-list']);
 }
 onSubmit(){
  this.saveCompanyInformation();
 }
}
  


