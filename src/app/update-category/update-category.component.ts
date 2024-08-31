import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  id:number;
  category:Category=new Category();

  constructor(private categoryService:CategoryService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe(data=>{
      this.category=data;
    },error => console.log(error));
}

onSubmit(){
  this.categoryService.updateCategories(this.id, this.category).subscribe(data =>{
    this.gotoCategoryList();
  },error => console.log(error));
}

gotoCategoryList(){
  this.router.navigate(['/category-list'])
}
}