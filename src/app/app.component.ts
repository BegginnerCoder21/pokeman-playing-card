import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokeman-play-card';
}
