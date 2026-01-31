import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  user: any = {};

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.user = form.value;
    console.log(this.user);
  }
}
