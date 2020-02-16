import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product/product.model';

const API_URL = 'https://s-shop-test.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  config = {
    headers: {
      'Content-Type': 'application/json'
    },
  };

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/product');
  }

  post(query): any {
    return this.http.post<Product>(API_URL + '/product', query);
  }
}
