import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  color:string = '';

  onBtnClick(val:string){
    this.color = val;
  }

  enteredValue(event:Event){
    this.color = (event.target as HTMLInputElement).value
  }
}
