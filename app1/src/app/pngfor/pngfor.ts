import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pngfor',
  imports: [NgFor],
  templateUrl: './pngfor.html',
  styleUrl: './pngfor.css',
})
export class Pngfor {
 cities:string[] = ["New Delhi", "Mumbai", "Banglore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad","Noida"];

}
