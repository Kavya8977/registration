import { Component, OnInit } from '@angular/core';
import { CardDetails } from '../card';
import { CardService } from '../card.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit{
  cards:CardDetails=new CardDetails();
  constructor(private cardService:CardService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    
  }
  saveCard(){
   this.cardService.addCard(this.cards).subscribe(data=>{
    console.log(data);
    this.gotoCardlist();
 },
 error=>console.log(error));
 }


 gotoCardlist(){
  this.router.navigate(['/card-list']);
 }
 onSubmit(){
  
  this.saveCard();
 }
}
  


