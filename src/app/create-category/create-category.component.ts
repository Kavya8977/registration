import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit{
  categories:Category;
  constructor(private categoryService:CategoryService,private router:Router){}

  ngOnInit(): void {
    this.categories=new Category;
  }
  saveCategory(){
    this.categoryService.addCategory(this.categories).subscribe(data=>{
      console.log(data);
      this.gotoCategorylist();
   },
   error=>console.log(error));
   }
   gotoCategorylist(){
    this.router.navigate(['/category-list']);
   }
   onSubmit(){
    this.saveCategory();
   }
  
}
