import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService} from '../category.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
category:Category[];
isAdmin:boolean=false;
filterData:Category[];
searchQuery:any;


categorydetails(id:number){
  this.router.navigate(['/category-details',id]);
  
}
updatedetails(id:number){
  this.router.navigate(['/update-category',id]);
}
constructor(private categoryService: CategoryService,private router:Router, private route: ActivatedRoute) { }
ngOnInit(): void {
    this.categoryList();
      const data=JSON.parse(localStorage.getItem('adminData'));
      if(data.role==='ADMIN'){
        this.isAdmin=true;
      }else{
        this.isAdmin=false;
      }

  this.getCategorys();
    }
    getCategorys(){
      this.categoryService.getAllCategorys().subscribe(data =>{
        this.category=data;
        this.filterData=data;
        console.log(data);
        
      })
    }

    categoryList(){
      this.categoryService.getAllCategorys().subscribe((data)=>{
        this.category=data;
        console.log(data);
        this.router.navigate(['/category-list']);
      });
    }
    deletedetails(id: number) {
      this.categoryService.DeleteCategory(id).subscribe(data =>{
       console.log(data);
         this.getCategorys();
         this.router.navigate(['/category-delete']);
       })
    }
      // onSearch(event:Event){
      //   event.preventDefault();
      //   if(this.searchQuery){
      //     this.filterData=this.category.filter(data=>
      //       data.categoryName.toLowerCase().includes(this.searchQuery.toLowerCase())
      //     )
      //   }else{
      //     this.category=this.filterData;
      //   }
        
      //  }
}
