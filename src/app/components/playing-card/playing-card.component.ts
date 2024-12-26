import { Component, Input } from '@angular/core';
import { Monster } from '../../models/app.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  @Input() monster: Monster = new Monster();

}
