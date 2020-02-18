import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';

const API_URL = 'https://s-shop-test.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/product');
  }

  post(query): any {
    return this.http.post<Product>(API_URL + '/product', query);
  }

  delete(id): any {
    return this.http.delete(`${API_URL}/product/${id}`);
  }
}
