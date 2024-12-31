import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/app.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster/monster.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monsters = signal<Monster[]>([]);
  search  = signal('');
  monsterService = inject(MonsterService);

  
    constructor(){
  
      // localStorage.removeItem('monsters');
      this.monsters.set(this.monsterService.getAll());
      
    }

  filteredMonsters = computed(() => {
  
    return this.monsters().filter((monster) => monster.name.toLowerCase().includes(this.search().toLowerCase())
  );
    
  });
 

  addGenericMonster(){
    const monster = new Monster();
    this.monsterService.add(monster);
    this.monsters.set(this.monsterService.getAll())
  }

}
