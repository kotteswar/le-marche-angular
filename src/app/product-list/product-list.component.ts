import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList = []

  constructor() { }

  ngOnInit() {


    this.productList = [
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-1.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-2.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-3.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-4.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-5.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-6.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-7.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-8.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-9.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-10.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-11.jpg',
        price: '$30.00'
      },
      {
        prodName: 'Crab Pool Security',
        prodImg: 'assets/img/product/product-12.jpg',
        price: '$30.00'
      }
    ]

  }

}
