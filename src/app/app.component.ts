import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { GetAndSetComponent } from "./get-and-set/get-and-set.component";
import { IfelseComponent } from "./ifelse/ifelse.component";
import { ElseifComponent } from "./elseif/elseif.component";
import { SwitchComponent } from "./switch/switch.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, GetAndSetComponent, IfelseComponent, ElseifComponent, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practiceProject1';
}
