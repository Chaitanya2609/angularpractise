import { ChildComponent } from './../child/child.component';
import { Component } from '@angular/core';
//import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  childData='';
  addItem='';

  receiveMessage(message:string){
  this.childData=message;
console.log("Recieved message from child : " + message);
}
  }

