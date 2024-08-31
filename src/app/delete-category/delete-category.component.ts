import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit{
  id:number;

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.deleteCategory();
    }
    deleteCategory() {
      this.categoryService.DeleteCategory(this.id).subscribe(
        data => {
          console.log('Category deleted successfully');
          this.router.navigate(['/categories']);
        },
        error => console.log(error)
      );
    }

}
