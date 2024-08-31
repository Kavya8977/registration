import { Component, OnInit } from '@angular/core';
import { CompanyInformation } from '../company-information';
import { CompanyService } from '../company.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  cid: bigint;
  company : CompanyInformation=new CompanyInformation();

  constructor(private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.cid= this.route.snapshot.params['cId'];
      this.companyService.getCompanyInfoById(this.cid).subscribe(data =>{
        this.company=data;
      },error => console.log(error));
  }
  
  onSubmit(){
    this.companyService. updateCompanyInformation(this.cid, this.company).subscribe(data =>{
      this.gotoCompanylist();
      console.log(data);
      
    },error => console.log(error));
  }

  gotoCompanylist(){
    this.router.navigate(['/company-list'])
  }
}