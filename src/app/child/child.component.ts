import { Component, Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
@Input() name ="Chaitanya";
@Input() occupation="Software Developer";

@Output() messageEvent = new EventEmitter<string>();
sendMessageToParent(){
  this.messageEvent.emit("Hello from child component");
}

@Output() addItemEvent = new EventEmitter<string>();

addItem() {
  this.addItemEvent.emit('hello');
}
}


