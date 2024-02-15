import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  favoriteFramework = '';
  username='chaitanya';

  showFramework() {
    alert(this.favoriteFramework);
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
}
