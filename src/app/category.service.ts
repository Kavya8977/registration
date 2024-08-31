import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl="http://localhost:8090/category"
  
  constructor(private http:HttpClient) { }
 getAllCategorys():Observable<Category[]>{
  return this.http.get<Category[]>(`http://localhost:8090/category/getall`)
 }
getCategoryById(id:number):Observable<Category>{
  return this.http.get<Category>(`http://localhost:8090/category/fetch/${id}`)
}
updateCategories(id:number, Categories:Category):Observable<Category>{
  return this.http.put<Category>(`http://localhost:8090/category/update/${id}`,Categories);
}

  addCategory(Categories:Category):Observable<Category>{
    return this.http.post<Category>(`http://localhost:8090/category/add`,Categories);
  }
  DeleteCategory(id:number):Observable<object>{
    return this.http.delete(`http://localhost:8090/category/delete/${id}`);
  }
}
