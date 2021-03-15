import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManageCardsService } from './services/manage-cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jerusalem-muni';
  listOfCardsNum = ["1", "2", "3", "4", "5", "10", "11", "13", "14", "15", "20", "21", "23", "24", "25", "30", "31", "32", "33", "35"];
  listOfCardsNumVis = [];
  listOfCards:{} = {"1":false, "2":false, "3":false, "4":false,  "5":false, "10":false,"11":false,"12":false,"13":false,"14":false,"15":false, "20":false, "21":false,"22":false,"23":false,"24":false, "25":false, "30":false, "31":false, "32":false, "33":false, "34":false, "35":false};
  searchForm: FormGroup;
  seletedCard;
  constructor(private selectCardService: ManageCardsService){
  }
  ngOnInit(){
    //listener to cards selected from service
    this.selectCardService.subscribe(data =>{
      this.seletedCard = data;
      console.log(this.seletedCard);
    })

    this.listOfCardsNumVis = this.listOfCardsNum;
    this.searchForm = new FormGroup({
      searchInput: new FormControl(null)
    })

    this.searchForm.valueChanges.subscribe(
       (value) => {
         this.listOfCardsNumVis=[];
         if(value.searchInput == ''){
          this.listOfCardsNumVis = this.listOfCardsNum
         }else{
          this.listOfCardsNum.map(i =>{
            let numInArray;
            i.length > 1 ?numInArray = i.split(""): numInArray = i;
            numInArray.includes(value.searchInput) ? this.listOfCardsNumVis.push(i):''; 
          });
        }
        }
    );
  }

  selectItem(item){
    this.listOfCards[item] = true;   

    // insert card selected to array in service
    this.selectCardService._active.push(Number(item));
  }

  allCars(){
    this.listOfCardsNumVis = this.listOfCardsNum;
  }

  selected(bool){
    this.listOfCardsNumVis=[];
    this.listOfCardsNum.map(i =>{
      this.listOfCards[i] == bool ? this.listOfCardsNumVis.push(i):'';
    });
  }
}
