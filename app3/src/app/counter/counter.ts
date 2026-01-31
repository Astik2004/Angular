import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;
  handeleIncrement() {
    this.count=this.count+1;
  }
  handleDecrement() {
    if(this.count>0)
    {
      this.count=this.count-1;
    }
  }
  handleReset() {
    this.count=0;
  } 
}
