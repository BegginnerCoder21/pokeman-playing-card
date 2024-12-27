import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/app.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monsters!: Monster[];
  count: number = 0;
  search : string = '';
  selectedMonsterIndex = signal(0);

  constructor(){

    this.monsters = [];
    effect(() => {
      console.log(this.selectedMonster());
    })
    const monster1 = new Monster();
    monster1.name = "Pika pika";
    monster1.hp = 87;
    monster1.numberMonster = "N°021 Monster";
    monster1.attackName = "Destruction";
    monster1.attackNumber = 60;
    monster1.attackDescription = "Ceci est un test de fonctionnalité 1";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Flamme";
    monster2.hp = 23;
    monster2.numberMonster = "N°032 Monster";
    monster2.attackName = "kameha meha";
    monster2.attackNumber = 91;
    monster2.image = 'assets/monster3.jpg'
    monster2.type = MonsterType.FIRE
    monster2.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Noir";
    monster3.hp = 23;
    monster3.numberMonster = "N°034 Monster";
    monster3.attackName = "kameha";
    monster3.type = MonsterType.PLANT;
    monster3.image = 'assets/monster4.jpg'
    monster3.attackNumber = 91;
    monster3.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster3);
  }
  updating(value : string){
    console.log(value);
    
    this.search = value;
  }

  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  });

  increaseCount(){

    this.count ++;
  }

  toggleMonster(){
    
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
    // console.log(this.selectedMonsterIndex);
  }

}
