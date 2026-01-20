import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-pngif',
  imports: [NgIf],
  templateUrl: './pngif.html',
  styleUrl: './pngif.css',
})
export class Pngif {
  marks:number=20;
  b:boolean;
  constructor(){  
    if(this.marks>=30)
    {
      this.b=true;
    }
    else{
      this.b=false;
    }
  }
}
