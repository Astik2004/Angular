import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Services } from './services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productData: any={};
  constructor(private productService: Services) { }
  ngOnInit(){
    this.productService.getProductList().subscribe((data: any)=>{
      console.log(data);
      this.productData = data.products;
    });
  }
}
