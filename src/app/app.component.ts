import { Component, computed, effect, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/app.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monsters!: Monster[];
  search  = signal('');

  filteredMonsters = computed(() => {
  
    return this.monsters.filter((monster) => monster.name.includes(this.search()));
    
  });

  constructor(){

    this.monsters = [];
   
    const monster1 = new Monster();
    monster1.name = "Pika pika";
    monster1.hp = 87;
    monster1.numberMonster = "N°001 Monster";
    monster1.attackName = "Destruction";
    monster1.attackNumber = 60;
    monster1.attackDescription = "Ceci est un test de fonctionnalité 1";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Dracaufeu";
    monster2.hp = 23;
    monster2.numberMonster = "N°002 Monster";
    monster2.attackName = "kameha meha";
    monster2.attackNumber = 91;
    monster2.image = 'assets/monster3.jpg'
    monster2.type = MonsterType.FIRE
    monster2.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Salamèche";
    monster3.hp = 23;
    monster3.numberMonster = "N°003 Monster";
    monster3.attackName = "kameha";
    monster3.type = MonsterType.PLANT;
    monster3.image = 'assets/monster4.jpg'
    monster3.attackNumber = 91;
    monster3.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = "Saquedeneu";
    monster4.hp = 23;
    monster4.numberMonster = "N°004 Monster";
    monster4.attackName = "kameha";
    monster4.type = MonsterType.WATER;
    monster4.image = 'assets/monster2.jpg'
    monster4.attackNumber = 91;
    monster4.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster4);

    const monster5 = new Monster();
    monster5.name = "Fantominus";
    monster5.hp = 23;
    monster5.numberMonster = "N°0005 Monster";
    monster5.attackName = "kameha";
    monster5.type = MonsterType.PLANT;
    monster5.image = 'assets/monster5.jpg'
    monster5.attackNumber = 91;
    monster5.attackDescription = "Ceci est un test de fonctionnalité 2";
    this.monsters.push(monster5);
  }
 



}
