import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';

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
      proName: 'Royal Gala',
      img: 'assets/img/products_images/fruits/apple/apple_gala.png'
    },
    {
      proName: 'Dried Fruits',
      img: 'assets/img/products_images/vegetables/fruit_vegetables/round_tomato.png'
    },
    {
      proName: 'Mandarine',
      img: 'assets/img/products_images/fruits/cirtus/mandarine.png'
    },
    {
      proName: 'Rattu du tuquet',
      img: 'assets/img/products_images/vegetables/potatoes/rattu_du_tuquet.png'
    },
    {
      proName: 'Banane bio',
      img: 'assets/img/products_images/fruits/other_fruits/banana.png'
    },
    {
      proName: 'Oignons Rouge',
      img: 'assets/img/products_images/vegetables/onions_garlic/red_onion.png'
    },
    {
      proName: 'Pasteque',
      img: 'assets/img/products_images/fruits/other_fruits/watermelon.png'
    },
    {
      proName: 'Carotte',
      img: 'assets/img/products_images/vegetables/root_vegetables/carrot.png'
    }
  ];

  productsCake = [
    {
      proName: 'TR Gâteau',
      img: 'assets/img/products_images/cakes/cake1.PNG'
    },
    {
      proName: 'TR Gâteau',
      img: 'assets/img/products_images/cakes/cake2.PNG'
    },
    {
      proName: 'TR Gâteau',
      img: 'assets/img/products_images/cakes/cake3.PNG'
    },
    {
      proName: 'TR Gâteau',
      img: 'assets/img/products_images/cakes/cake4.PNG'
    }
  ];


  SlideOptions = { items: 4, dots: true, nav: true, navigation: true };
  public istopeValue;
  // CarouselOptions = { items: 3, dots: true, nav: true };

  constructor(private router: Router,@Inject(DOCUMENT) private _document: Document) { 
    this.istopeValue = 'all';
    let  shoppedItemLength;
    if(localStorage.getItem('shopped') == null) {
      shoppedItemLength = 0;
    }
    else {
      shoppedItemLength = JSON.parse(localStorage.getItem('shopped')).length || 0;
    }
    
    if(shoppedItemLength > 0) {
      localStorage.removeItem("shopped");
      localStorage.removeItem("totalPrice");
      this._document.defaultView.location.reload(); 
    }
  }

  ngOnInit() {

  }

  public selectIsotop(event) {

    this.istopeValue = event.target.dataset.target;
    const items = document.querySelector('.items').children;
	  const target = event.target.dataset.target;

    for(let k=0; k<items.length; k++){
        items[k]['style'].opacity = '0';
        items[k]['style'].transform = 'scale(0)';
        items[k]['style'].display = 'none';
        // setTimeout(function() {
        // // items[k]['style'].display='none';
        //   // items[k]['style'].height='0';
        //   // items[k]['style'].width='0';
        //   items[k]['style'].padding='0';
        //   items[k]['style'].visibility='hidden';
        // }, 1000);


      if(items[k].getAttribute('data-id') === target) {
        items[k]['style'].opacity='1';
        items[k]['style'].transform='scale(1)';
        items[k]['style'].display = 'block';
        // setTimeout(function() {
        // // items[k]['style'].display='inline-block';
        //   // items[k]['style'].height='25%';
        //   // items[k]['style'].width='25%';
        //   items[k]['style'].padding='15px';
        //   items[k]['style'].visibility='visible';
        // }, 1000)

      }
      if(target=='all'){
        items[k]['style'].opacity='1';
        items[k]['style'].transform='scale(1)';
        items[k]['style'].display = 'block';
        // setTimeout(function() {
        // // items[k]['style'].display='inline-block';
        // // items[k]['style'].height='25%';
        // // items[k]['style'].width='25%';
        // items[k]['style'].padding='15px';
        // items[k]['style'].visibility='visible';
        // }, 1000)
      }
    }

  }
  
  public goToShopPage() {
    this.router.navigate(['/products']);
  }
  public goToShopTRgateau() {
    location.href = "https://www.facebook.com/TR-g%C3%A2teau-505161249888952/";
  }



}
