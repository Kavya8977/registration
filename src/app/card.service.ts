import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardDetails } from './card';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private baseUrl="http://localhost:8090/card";

  getCardList() :Observable<CardDetails[]>{
    return this.http.get<CardDetails[]>(`${this.baseUrl}/getall`);
  }
  

  constructor(private http:HttpClient) { }
  getAllCard():Observable<CardDetails[]>{
    return this.http.get<CardDetails[]>(`http://localhost:8090/cardDetails/getall`);
   }
  getCardById(id:number):Observable<CardDetails>{
    return this.http.get<CardDetails>(`http://localhost:8090/cardDetails/fetch/${id}`);
  }
  updateCard(id:number, card:CardDetails):Observable<CardDetails>{
    return this.http.put<CardDetails>(`http://localhost:8090/cardDetails/update/${id}`,card);
  }
  
    addCard(Card:CardDetails):Observable<object>{
      return this.http.post(`http://localhost:8090/cardDetails/add`,Card);
    }
    DeleteCard(cardId:number):Observable<object>{
      return this.http.delete(`http://localhost:8090/cardDetails/deleteCard/${cardId}`);
    }
  }
  
