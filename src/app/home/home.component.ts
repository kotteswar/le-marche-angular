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
  ];

  SlideOptions = { items: 4, dots: true, nav: true, navigation: true };
  public istopeValue;
  // CarouselOptions = { items: 3, dots: true, nav: true };

  constructor() { }

  ngOnInit() {

  }

  public selectIsotop(event) {

    this.istopeValue = event.target.dataset.target;
    const items = document.querySelector('.items').children;
	  const target = event.target.dataset.target;

    for(let k=0; k<items.length; k++){
        items[k]['style'].opacity = '0';
        items[k]['style'].transform = 'scale(0)';
        setTimeout(function() {
        // items[k]['style'].display='none';
          items[k]['style'].height='0';
          items[k]['style'].width='0';
          items[k]['style'].padding='0';
          items[k]['style'].visibility='hidden';
        }, 1000);


      if(items[k].getAttribute('data-id')==target){
        items[k]['style'].opacity='1';
        items[k]['style'].transform='scale(1)';
        setTimeout(function() {
        // items[k]['style'].display='inline-block';
          items[k]['style'].height='25%';
          items[k]['style'].width='25%';
          items[k]['style'].padding='15px';
          items[k]['style'].visibility='visible';
        }, 1000)

      }
      if(target=='all'){
        items[k]['style'].opacity='1';
        items[k]['style'].transform='scale(1)';
        setTimeout(function() {
        // items[k]['style'].display='inline-block';
        items[k]['style'].height='25%';
        items[k]['style'].width='25%';
        items[k]['style'].padding='15px';
        items[k]['style'].visibility='visible';
        }, 1000)
      }
    }

	}



}
