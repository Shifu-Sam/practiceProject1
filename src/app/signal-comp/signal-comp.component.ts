import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-signal-comp',
  imports: [],
  templateUrl: './signal-comp.component.html',
  styleUrl: './signal-comp.component.css'
})
export class SignalCompComponent {
  // num:number = 10;
  // data = signal(20);

  // constructor(){
  //   effect(()=>{
  //     console.log(this.data())
  //   })
  // }

  // onClickBtn(val:string){
  //   // console.log(this.num + 1);
  //   // this.data.set(this.data()+1);

  //   if(val=='inc'){
  //     this.data.set(this.data()+1);
  //   }else{
  //     this.data.set(this.data()-1);
  //   }
  // }



  //types of signal:- Writeable signal, Computed signal
  //dataTypes
  //set,update

  // data = signal<string>('hey'); //assigning data type of value
  // count:WritableSignal<number | string> = signal(50); //assigning data type to signal
  // num:Signal<number> = computed(()=>10); // cant change on declared

  // onUpdate(){
  //   // this.data.set('Hello');
  //   this.data.update(()=>('yo')) // at a time only on datatype of signal(will not work with multipal datatype signals)
  //   // this.num.set()
  // }



  //Computed Signal

  // x=20;
  // y=30;
  // z=computed(()=>this.x+this.y);

  x=signal(10);
  y=signal(30);
  z=computed(()=>this.x()+this.y());

  onBtnClick(){
    console.log(this.z())
    this.x.set(100);
    console.log(this.z())
  }
}
