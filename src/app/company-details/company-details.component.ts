import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyInformation } from '../company-information';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit{
  id:bigint;
  company:CompanyInformation=new CompanyInformation();
  constructor(private companyService:CompanyService,private route:ActivatedRoute){}
ngOnInit(): void {
  this.id=this.route.snapshot.params['cId'];
  this.companyService.getCompanyInfoById(this.id).subscribe(data=>{
    this.company=data;
  })
}
}
