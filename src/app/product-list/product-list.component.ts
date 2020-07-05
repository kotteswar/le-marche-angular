import { Component, OnInit, HostListener } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList = [];
  public allProducts = [];
  public notEmptyPost = true;
  public notScrolly = true;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {

    this.getProducts();
    window.addEventListener('scroll', this.scrollHandler.bind(this), false);

  }

  public getProducts() {
    this.apiService.getProducts().subscribe((res) => {
        console.log(res);
        this.allProducts = res['Sheet1'];
        console.log(this.allProducts);
        this.productList = this.allProducts.slice(0, 6);
        console.log(this.productList, this.allProducts);
    }, err => {
      console.log(err);
    });
  }

  public onScroll() {

    if (this.notEmptyPost && this.notScrolly) {
        this.notScrolly = false;
    }

  }

  public loadProducts() {
    this.allProducts.slice(0, 6).forEach((item) => {
        this.productList.push(item);
    });
    console.log(this.allProducts);
  }

  public scrollHandler() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled === scrollable) {
      console.log('you have reached the bottom');
      this.loadProducts();
    }
  }





}
