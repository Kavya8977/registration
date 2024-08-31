import { Component } from '@angular/core';
import { CardDetails } from '../card';
import { CardService } from '../card.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent {
id:number;
card:CardDetails=new CardDetails();
constructor(private cardService:CardService,private router:Router,private route:ActivatedRoute){}
ngOnInit():void{
  this.id = this.route.snapshot.params['cardId'];
  this.cardService.getCardById(this.id).subscribe(data => {
    this.card = data;
  }, error => console.log(error));
}
onSubmit() {
  this.cardService.updateCard(this.id, this.card).subscribe(data => {
    this.goToCardList();
  }, error => console.log(error));
}

goToCardList() {
  this.router.navigate(['/card-list']);
}
}


