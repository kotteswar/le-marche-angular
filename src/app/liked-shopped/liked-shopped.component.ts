import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
              obj.chagedPrice = item.price;
              obj.changedQuantity = item.quantity;

              return obj;
        });
        this.totalPrice = this.shoppedArr.reduce((acc, curr) => {
              return acc + parseFloat(curr.chagedPrice);
        }, 0);
        console.log(this.shoppedArr, this.totalPrice);
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
      localStorage.setItem('shopped', JSON.stringify(this.shoppedArr));
  }



}
