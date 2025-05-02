import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { GetAndSetComponent } from "./get-and-set/get-and-set.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, GetAndSetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practiceProject1';
}
