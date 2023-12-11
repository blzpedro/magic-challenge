import { Component } from '@angular/core';
import { MtgService } from './services/mtg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magic-challenge';

  constructor(public mtgService: MtgService){}
}
