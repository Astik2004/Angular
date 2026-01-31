import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Formg } from './formg/formg';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,Formg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name=new FormControl();
  email=new FormControl();
  onLogin(){
    alert(`Name: ${this.name.value}\nEmail: ${this.email.value}`);
  }
}
