import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor(private http: HttpClient) { }
  getProductList(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}
