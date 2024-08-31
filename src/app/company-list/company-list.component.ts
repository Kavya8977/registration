import { Component, OnInit } from '@angular/core';
import { CompanyInformation } from '../company-information';
import { CompanyService} from '../company.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit{
  company:CompanyInformation[];
  isAdmin:boolean=false;
  searchQuery:any;
  filterData:CompanyInformation[];

  companyDetails(cId:bigint){
    this.router.navigate(['/company-details',cId]);
  }
  updateCompanyInfo(cId:bigint){
    this.router.navigate(['/update-company',cId]);
  }
  constructor(private companyService: CompanyService,private router:Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.CompanyList();
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }

    this.getCompanyInfo();
      }
      CompanyList(){
        this.companyService.getAllCompanyInfo().subscribe((data)=>{
          this.company=data;
          console.log(data);
          this.router.navigate(['/company-list']);
        });
      }
      getCompanyInfo(){
        this.companyService.getAllCompanyInfo().subscribe(data=>{
          this.company=data;
          console.log(data);
          
        },error=>console.log(error));
          
      }
      deletedetails(cid: bigint) {
        this.companyService.DeleteCompanyInfo(cid).subscribe(data =>{
         console.log(data);
           this.getCompanyInfo();
           this.router.navigate(['/company-list']);
         })
        }
        // onSearch(event:Event){
        //   event.preventDefault();
        //   if(this.searchQuery){
        //     this.filterData=this.company.filter(data=>
        //       data.cName.toLowerCase().includes(this.searchQuery.toLowerCase())
        //     )
        //   }else{
        //     this.company=this.filterData;
        //   }
          
        //  }
  
  }
  
