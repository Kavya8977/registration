import { Injectable } from '@angular/core';
import { Organization } from './organization';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService { 
 private baseUrl="http://localhost:8090/organization"
  
constructor(private http:HttpClient) { }
getAllOrganizations():Observable<Organization[]>{
return this.http.get<Organization[]>(`http://localhost:8090/organization/getall`)
}
getOrganizationById(id:number):Observable<Organization>{
return this.http.get<Organization>(`http://localhost:8090/organization/fetch/${id}`)
}
updateOrganization(id:number, Organizations:Organization):Observable<Organization>{
return this.http.put<Organization>(`http://localhost:8090/organization/update/${id}`,Organizations);
}

addOrganization(Organizations:Organization):Observable<Organization>{
  return this.http.post<Organization>(`http://localhost:8090/organization/add`,Organizations);
}
DeleteOrganization(id:number):Observable<object>{
  return this.http.delete(`http://localhost:8090/organization/delete/${id}`);
}
}
