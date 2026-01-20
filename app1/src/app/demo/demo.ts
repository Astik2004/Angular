import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-demo',
  imports: [NgClass],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  marks:number=21;
  myClass:string="";
  constructor(){
    if(this.marks<=20){
      this.myClass="class1";
    }
    else{
      this.myClass="class2";
    }
  }
} 