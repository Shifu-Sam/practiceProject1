import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count:number = 0;
  inputValue:string = '';

  increment(){
    this.count++;
    this.resetInputField();
  }
  
  decrement(){
    this.count--;
    this.resetInputField();
  }

  reset(){
    this.count = 0;
    this.resetInputField();
  }

  onInput(event:Event){
    this.inputValue =  (event.target as HTMLInputElement).value;
    if(this.inputValue != ''){
      this.count = parseInt(this.inputValue);
    }
  }

  resetInputField(){
    this.inputValue = '';
  }

}
