import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: string[] = ['Fundamentos de Angular','Componentes y Servicios']

  newName = '';

  addTask(){
    this.tasks.push(this.newName);
    this.newName = '';
  }

  deleteTask(index: number){
    this.tasks.splice(index,1);
  }
  
}
