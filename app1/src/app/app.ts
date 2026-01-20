import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo } from './demo/demo';
import { Pngif } from './pngif/pngif';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo, Pngif],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  marks:number=20;
  myColor:string="";
  constructor(){  
    if(this.marks>=30)
    {
      this.myColor="red";
    }
    else{
      this.myColor="green";
    }
  }

}
