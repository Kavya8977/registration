import { Injectable } from '@angular/core';
import { CompanyInformation } from './company-information';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl="http://localhost:8090/CompanyInfo"
  
  constructor(private http:HttpClient) { }
 getAllCompanyInfo():Observable<CompanyInformation[]>{
  return this.http.get<CompanyInformation[]>(`http://localhost:8090/CompanyInfo/getall`)
 }
getCompanyInfoById(cId:bigint):Observable<CompanyInformation>{
  return this.http.get<CompanyInformation>(`http://localhost:8090/CompanyInfo/fetch/${cId}`)
}
updateCompanyInformation(cId:bigint, Company:CompanyInformation):Observable<object>{
  return this.http.put(`http://localhost:8090/CompanyInfo/update/${cId}`,Company);
}

  addCompanyInformation(Categories:CompanyInformation):Observable<object>{
    return this.http.post(`http://localhost:8090/CompanyInfo/add`,Categories);
  }
  DeleteCompanyInfo(cId:bigint):Observable<object>{
    return this.http.delete(`http://localhost:8090/CompanyInfo/delete/${cId}`);
  }
}
