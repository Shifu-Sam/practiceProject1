import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
  students=['Sanjit','Sam','Ram','Sita'];
  class=[
    {name:'Sanjit', rollNo:24, age:22},
    {name:'Sam', rollNo:21, age:22},
    {name:'Ram', rollNo:23, age:21},
    {name:'Sita', rollNo:22, age:20}
  ];
}
