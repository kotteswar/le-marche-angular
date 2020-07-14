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
  public allDataCopy = [];
  public subCateArr = [];
  public likedArray = [];
  public shoppedArray = [];

  constructor(private apiService: ApiServiceService) {
    
  }

  ngOnInit() {

    this.getProducts();
    window.addEventListener('scroll', this.scrollHandler.bind(this), false);

  }

  public getProducts() {
    this.categoryArr = [];
    this.apiService.getProducts().subscribe((res) => {
        this.allProducts = res['Sheet1'];
        this.allProducts = this.allProducts.map((item) => {
            return {
              ...item,
              liked: false,
              shopped: false
            }
        });
        console.log(this.allProducts);
        const likedFromLocal = JSON.parse(localStorage.getItem('liked'));
        const shoppedFromLocal = JSON.parse(localStorage.getItem('shopped'));
        this.likedArray = likedFromLocal;
        this.shoppedArray = shoppedFromLocal;
        this.allProducts.forEach((item) => {
          shoppedFromLocal.forEach((subItem) => {
                if (subItem.product_id === item.product_id) {
                    item.shopped = true;
                }
          });
        });
        this.allProducts.forEach((item) => {
          likedFromLocal.forEach((subItem) => {
                if (subItem.product_id === item.product_id) {
                    item.liked = true;
                }
          });
        });
        console.log(likedFromLocal, shoppedFromLocal, this.allProducts);
        this.allDataCopy = JSON.parse(JSON.stringify(this.allProducts));
        console.log(this.allDataCopy);
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

              if (subItem.sub_category.indexOf(item.sub_name_french) === -1) {
                subItem.sub_category.push(item.sub_name_french);
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
      console.log(event, event.source.value, this.allProducts, this.categoryArr);
      this.allProducts = this.allDataCopy;
      if (event.checked) {

        this.categoryArr.forEach((item) => {
          if (event.source.value === item.main_category) {
            item.checked = true;
            item.sub_category.forEach((subItem) => {
              subItem.checked = true;
              this.subCateArr.push(subItem.name);
            });
          }
        });
        console.log(this.subCateArr);

        this.allProducts = this.allProducts.filter((item) => {
              return item.main_category === event.source.value;
        });
        this.productList = this.allProducts.slice(0, 6);

        console.log(this.allProducts);

      } else {

        this.categoryArr.forEach((item) => {
          if (event.source.value === item.main_category) {
            item.checked = false;
            item.sub_category.forEach((subItem) => {
              subItem.checked = false;
              this.subCateArr = [];
            });
          }
        });

        this.getProducts();
        console.log(this.allProducts);

      }
  }

  public selectSingle(event) {
    console.log(event);
    let allCheckUncheck;
    this.allProducts = this.allDataCopy;
    console.log(this.allProducts);

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
      this.subCateArr.push(event.source.value);
      console.log(this.subCateArr);

    } else if (event.checked === false) {

      const index = this.subCateArr.indexOf(event.source.value);

      this.subCateArr.splice(index, 1);
      console.log(this.subCateArr);

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
        console.log(!allCheckUncheck);
        console.log(item);
        if (!allCheckUncheck) {
          item.checked = false;
        }
      });
      this.categoryArr = this.categoryArr;
      console.log(this.categoryArr);

    }

    this.allProducts = this.allProducts.reduce((acc, curr) => {
        if ( this.subCateArr.includes(curr.sub_name_french)) {
          acc.push(curr);
        }
        return acc;
    }, []);

    if (this.subCateArr.length === 0) {
      this.allProducts = this.allDataCopy;
    }

    this.productList = this.allProducts.slice(0, 6);

    console.log(this.categoryArr, this.allProducts);
  }


  public likeProduct(id) {
    this.productList = this.productList.map((item) => {
      let obj;
      if (item.product_id === id) {
        if (item.liked === false) {
          obj = {
            ...item,
            liked: true
          };
          this.likedArray.push(item);
        } else {
          obj = {
            ...item,
            liked: false
          };
          this.likedArray.splice(this.likedArray.indexOf(item), 1);
        }
      } else {
        obj = item;
      }
      return obj;
    });
    localStorage.setItem('liked', JSON.stringify(this.likedArray));
    console.log(this.productList, this.likedArray);
    this.apiService.sendLiked(JSON.parse(localStorage.getItem('liked')));
  }

  public shoppedProduct(id) {
    this.productList = this.productList.map((item) => {
      let obj;
      if (item.product_id === id) {
        if (item.shopped === false) {
          obj = {
            ...item,
            shopped: true
          };
          this.shoppedArray.push(item);
        } else {
          obj = {
            ...item,
            shopped: false
          };
          this.shoppedArray.splice(this.shoppedArray.indexOf(item), 1);
        }
      } else {
        obj = item;
      }
      return obj;
    });
    localStorage.setItem('shopped', JSON.stringify(this.shoppedArray));
    this.apiService.sendShopped(JSON.parse(localStorage.getItem('shopped')));
  }

  public storageEvent() {
    window.addEventListener('storage', (event) => {
      console.log(event);
    });
  }


}
