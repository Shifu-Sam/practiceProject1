import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  imports: [],
  templateUrl: './elseif.component.html',
  styleUrl: './elseif.component.css'
})
export class ElseifComponent {
  color:number = 0;

  onBtnClick(val:number){
    this.color = val;
  }

  fieldValue(event:Event){
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}
