import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ConceptComponent } from './concept/concept.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserComponent } from './user/user.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsComponent } from "./forms/forms.component";
//import { ReportComponent } from './user/report.component';
//import { title } from 'process';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent, NavigationComponent, ConceptComponent, ChildComponent, FormsModule, FormsComponent]
})
export class AppComponent {
  title = 'my-app';
  city='Bangalore';
  isServerRunning = true;
  users = [
    {id: 0, name: 'JS'},
    {id: 1, name: 'Angular'},
    {id: 2, name: 'reactjs'},
    {id: 3, name: 'html'},
    {id: 4, name: 'css'},
  ];

  btn_click(){
    console.log("hello button clicked ")
  }
}
