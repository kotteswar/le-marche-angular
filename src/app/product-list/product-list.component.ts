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
  public categoryArr = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {

    this.getProducts();
    window.addEventListener('scroll', this.scrollHandler.bind(this), false);

  }

  public getProducts() {
    this.apiService.getProducts().subscribe((res) => {
        this.allProducts = res['Sheet1'];
        this.productList = this.allProducts.slice(0, 6);
        let catArr = [];
        const categoryObj = {
          main_category: '',
          sub_category: []
        };


        this.allProducts.forEach((item) => {

            const catValue = item.main_category;
            if (catArr) {

            }
            catArr.push(catValue);

        });

        catArr = catArr.filter((el, i, a) => i === a.indexOf(el));

        catArr.forEach((item) => {
          this.categoryArr.push({
            main_category: item,
            sub_category: [],
            checked: false
          });
        });

        this.allProducts.forEach((item) => {
          this.categoryArr.forEach((subItem) => {
            if (subItem.main_category === item.main_category) {

              if (subItem.sub_category.indexOf(item.sub_category) === -1) {
                subItem.sub_category.push(item.sub_category);
              }

            }
          });
        });

        this.categoryArr.forEach((item) => {
           const mapped = item.sub_category.map((subItem) => {
                return {
                  name: subItem,
                  checked: false
                };
            });
           item.sub_category = mapped;
        });
        // if () {

        // }
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
    this.allProducts.slice(this.productList.length + 1, this.productList.length + 6).forEach((item) => {
        this.productList.push(item);
    });
  }

  public scrollHandler() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled === scrollable) {
      this.loadProducts();
    }
  }

  public selectAll(event) {
      console.log(event);
      if (event.checked) {

        this.categoryArr.forEach((item) => {
          if (event.source.value === item.main_category) {
            item.sub_category.forEach((subItem) => {
              subItem.checked = true;
            });
          }
        });

      } else {

        this.categoryArr.forEach((item) => {
          if (event.source.value === item.main_category) {
            item.sub_category.forEach((subItem) => {
              subItem.checked = false;
            });
          }
        });

      }
      
  }

  public selectSingle(event) {
    console.log(event);
    let allCheckUncheck;
    if (event.checked === true) {
      this.categoryArr.forEach((item) => {
          item.sub_category.forEach((subItem) => {
              if (subItem.name === event.source.value) {
                subItem.checked = true;
              }
          });
          allCheckUncheck = item.sub_category.every((subItem) => {
              return subItem.checked === true;
          });
          console.log(allCheckUncheck);
          if (allCheckUncheck) {
            item.checked = true;
          }
      });
    } else if (event.checked === false) {

      this.categoryArr.forEach((item) => {
        item.sub_category.forEach((subItem) => {
            if (subItem.name === event.source.value) {
              subItem.checked = false;
            }
        });
        allCheckUncheck = item.sub_category.every((subItem) => {
            return subItem.checked === true;
        });
        console.log(allCheckUncheck);
        if (!allCheckUncheck) {
          item.checked = false;
        }
      });

    }
    console.log(this.categoryArr);
  }





}
