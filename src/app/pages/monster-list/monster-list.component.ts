import { Component, computed, inject, signal } from '@angular/core';
import { Monster } from '../../models/app.model';
import { MonsterService } from '../../services/monster/monster.service';
import { CommonModule } from '@angular/common';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-monster-list',
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
   
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
