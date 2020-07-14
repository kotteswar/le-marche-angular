import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  Url = '../assets/data/product_inventory.json';
  private likedSubject = new Subject<any>();
  private shoppedSubject =  new Subject<any>();

  constructor(private http: HttpClient) {
  }


  getProducts(): Observable<any> {
    return this.http.get(this.Url);
  }

  public sendLiked(message) {
      this.likedSubject.next({liked: message});
  }

  public getLiked(): Observable<any> {
    return this.likedSubject.asObservable();
  }

  public sendShopped(message) {
    console.log(message);
    this.shoppedSubject.next({shopped: message});
  }

  public getShopped(): Observable<any> {
    console.log(this.shoppedSubject.asObservable());
    return this.shoppedSubject.asObservable();
  }

}
