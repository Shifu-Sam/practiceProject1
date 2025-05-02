import { Component } from '@angular/core';

@Component({
  selector: 'app-get-and-set',
  imports: [],
  templateUrl: './get-and-set.component.html',
  styleUrl: './get-and-set.component.css'
})
export class GetAndSetComponent {
  name:string = '';
  displayName:string = '';
  email:string = '';
  displayEmail:string = '';

  onInput(event: Event){
    this.name = (event.target as HTMLInputElement).value;
  }

  getNameBtn(){
    this.displayName = this.name;
  }

  setNameBtn(){
    this.name = 'sam';
  }

  getEmailBtn(val:string){
    this.displayEmail = val;
  }

  setEmailBtn(){
    this.email = 'example@xyz.com'
  }
}
