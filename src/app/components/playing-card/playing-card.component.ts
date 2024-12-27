import { Component, computed, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/app.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  monster: InputSignal<Monster> = input(new Monster());
  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });

  backgroundColor = computed(() => {
      return MonsterTypeProperties[this.monster().type].color;
  });

}
