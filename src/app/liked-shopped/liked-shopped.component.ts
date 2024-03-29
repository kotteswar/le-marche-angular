import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-liked-shopped',
  templateUrl: './liked-shopped.component.html',
  styleUrls: ['./liked-shopped.component.css']
})
export class LikedShoppedComponent implements OnInit {

  public paramValue;
  public likedArr = [];
  public shoppedArr = [];
  public totalPrice;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiServiceService
    ) { }

  ngOnInit() {

    this.readParam();
    this.getFromLocal();
  }

  public readParam() {
    console.log(this.route, this.route.params['_value'].value);
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.paramValue = params['value'];
    });
    this.paramValue = this.route.snapshot.paramMap.get('value');
    console.log(this.paramValue);
  }

  public getFromLocal() {
    console.log(JSON.parse(localStorage.getItem(this.paramValue)), this.paramValue);
    if (localStorage.getItem(this.paramValue) !== null) {
      if (this.paramValue === 'liked') {
        this.likedArr = JSON.parse(localStorage.getItem(this.paramValue));
        console.log(this.likedArr);
      } else if (this.paramValue === 'shopped') {
        this.shoppedArr = JSON.parse(localStorage.getItem(this.paramValue)).map((item) => {
              const obj = {
                ...item
              };
              if (!obj.hasOwnProperty('chagedPrice') && !obj.hasOwnProperty('changedQuantity')) {
                  obj.chagedPrice = item.price;
                  obj.changedQuantity = item.quantity;
              }

              return obj;
        });
        this.totalPrice = this.shoppedArr.reduce((acc, curr) => {
              return acc + parseFloat(curr.chagedPrice);
        }, 0);
        this.totalPrice = this.totalPrice.toFixed(2);
        console.log(this.shoppedArr, this.totalPrice);
        localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
      }
    }


  }

  public incDecProd(value, id) {
      if (value === 'inc') {
          this.shoppedArr = this.shoppedArr.map((item) => {
            let obj;
            if (id === item.product_id) {
               obj = {
                ...item
              };
               obj.chagedPrice = Number(parseFloat(obj.chagedPrice).toFixed(2)) + Number(parseFloat(obj.price).toFixed(2));
               obj.changedQuantity = parseInt(obj.changedQuantity, 10) + parseInt(obj.quantity, 10);
               
              } else {
              obj = {
                ...item
              };
            }
            return obj;
          });
      } else if (value === 'dec') {
        this.shoppedArr = this.shoppedArr.map((item) => {
          let obj;
          if (id === item.product_id) {
             obj = {
              ...item
            };
             if (Number(parseInt(obj.chagedPrice, 10)) > Number(parseFloat(obj.price).toFixed(2))) {
                obj.chagedPrice = Number(parseFloat(obj.chagedPrice).toFixed(2)) - Number(parseFloat(obj.price).toFixed(2));
             }
             if (parseInt(obj.changedQuantity, 10) > parseInt(obj.quantity, 10)) {
              obj.changedQuantity = parseInt(obj.changedQuantity, 10) - parseInt(obj.quantity, 10);
             }
          } else {
            obj = {
              ...item
            };
          }
          return obj;
        });
      }
      this.totalPrice = this.shoppedArr.reduce((acc, curr) => {
        return acc + parseFloat(curr.chagedPrice);
      }, 0);
      this.totalPrice = this.totalPrice.toFixed(2);
      localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
      localStorage.setItem('shopped', JSON.stringify(this.shoppedArr));
  }

  goContactPage() {
    this.router.navigate(['contact']);
  }

  removeProduct(id) {
    const index = this.shoppedArr.findIndex((item) =>  item.product_id === id);
    this.shoppedArr.splice(index, 1);
    localStorage.setItem('shopped', JSON.stringify(this.shoppedArr));
    this.apiService.sendShopped(JSON.parse(localStorage.getItem('shopped')));
    console.log(this.shoppedArr);
    console.log(index);
  }



}
