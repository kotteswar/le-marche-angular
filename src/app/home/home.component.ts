import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Images = ['assets/img/product/categories/cat-1.jpg',
  'assets/img/product/categories/cat-2.jpg',
  'assets/img/product/categories/cat-3.jpg',
  'assets/img/product/categories/cat-4.jpg',
  'assets/img/product/categories/cat-5.jpg'];

  products = [
    {
      proName: 'Fresh Fruits',
      img: 'assets/img/product/categories/cat-1.jpg'
    },
    {
      proName: 'Dried Fruits',
      img: 'assets/img/product/categories/cat-2.jpg'
    },
    {
      proName: 'Vegetables',
      img: 'assets/img/product/categories/cat-3.jpg'
    },
    {
      proName: 'Drink Fruits',
      img: 'assets/img/product/categories/cat-4.jpg'
    },
    {
      proName: 'Meats',
      img: 'assets/img/product/categories/cat-5.jpg'
    }
  ]

  SlideOptions = { items: 4, dots: true, nav: true, navigation: true };
  // CarouselOptions = { items: 3, dots: true, nav: true };

  constructor() { }

  ngOnInit() {

  }





}
