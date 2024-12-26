import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/app.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  monster: InputSignal<Monster> = input(new Monster());

}
