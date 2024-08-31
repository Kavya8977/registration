import { Component, OnInit } from '@angular/core';
import { CardDetails } from '../card';
import { CardService } from '../card.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit{
card:CardDetails[];
isAdmin:boolean=false;
searchQuery:any;
filterData: CardDetails[];

cardDetails(cardId:number){
  this.router.navigate(['/card-details',cardId]);
}
updateCard(cardId:number){
  this.router.navigate(['/update-card',cardId]);
}
constructor(private cardService: CardService,private router:Router, private route: ActivatedRoute) { }
ngOnInit(): void {
  this.cardList();
    const data=JSON.parse(localStorage.getItem('adminData'));
    if(data.role==='ADMIN'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }
  this.getCards();
    }
    getCards(){
      this.cardService.getAllCard().subscribe(data=>{
        this.card=data;
        this.filterData=data;
        console.log(data);
        
      },error=>console.log(error));
        
    }
    cardList(){
      this.cardService.getCardList().subscribe((data)=>{
        this.card=data;
        console.log(data);
        this.router.navigate(['/card-list']);
      });
    }
    deletedetails(id: number) {
      this.cardService.DeleteCard(id).subscribe(data =>{
       console.log(data);
         this.getCards();
         this.router.navigate(['/card-list']);
       })
      }
      // onSearch(event:Event){
      //   event.preventDefault();
      //   if(this.searchQuery){
      //     this.filterData=this.card.filter(data=>
      //       data.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      //     )
      //   }else{
      //     this.card=this.filterData;
      //   }
        
      //  }


}
