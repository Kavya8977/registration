import { Component, OnInit } from '@angular/core';
import { CardDetails } from '../card';
import { CardService } from '../card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit{
  id:number;
   card:CardDetails=new CardDetails();
  constructor(private cardService:CardService,private route:ActivatedRoute){}
ngOnInit(): void {
  this.id=this.route.snapshot.params['cardId'];
  this.cardService.getCardById(this.id).subscribe(data=>{
    this.card=data;
    console.log(data);
  })
}
}
