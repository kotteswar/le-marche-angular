import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  Url = '../assets/data/product_inventory.json';

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get(this.Url);
  }

}
