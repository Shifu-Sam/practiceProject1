import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  tasks:string[]=[];
  task:string = '';

  addTask(){
    this.tasks.push(this.task);
    this.task = '';
  }

  deleteTask(index:number){
    this.tasks.splice(index,1);
  }


}
