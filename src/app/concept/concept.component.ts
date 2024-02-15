import { Component } from '@angular/core';

@Component({
  selector: 'app-concept',
  standalone: true,
  imports: [],
  templateUrl: './concept.component.html',
  styleUrl: './concept.component.css'
})
export class ConceptComponent {
  message:string="";
 isEditable : boolean = true;
 isEditables : boolean = false;

onMouseOver(){
  this.message="hello this is messgae element";
  console.log("Mouse Over" , + this.message);
}
}
