import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/app.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monster1!: Monster;
  count: number = 0;
  search : string = '';
  constructor(){

    this.monster1 = new Monster();
    this.monster1.name = "Pika pik";
    this.monster1.hp = 87;
    this.monster1.numberMonster = "N°024 Monster";
    this.monster1.attackName = "Destruction";
    this.monster1.attackNumber = 60;
    this.monster1.attackDescription = "Ceci est un test de fonctionnalité";
  }
  updating(value : string){
    console.log(value);
    
    this.search = value
  }
  increaseCount(){
    this.count ++;
  }
}
