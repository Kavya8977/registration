import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{
  id:number;
  categories:Category=new Category();
  constructor(private categoryService:CategoryService,private route:ActivatedRoute){}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.categoryService.getCategoryById(this.id).subscribe(data=>{
    this.categories=data;
  })
}
}
