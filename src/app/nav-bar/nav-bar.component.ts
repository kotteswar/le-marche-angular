import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public openMenuParam: boolean = false;
  public liked;
  public shopped;
  public likedLength;
  public shoppedLength;

  constructor(private apiService: ApiServiceService, private router: Router) {

    this.apiService.getLiked().subscribe((res) => {
      console.log(res);
      this.liked = res.liked;
      this.likedLength = this.liked.length;
    });

    this.apiService.getShopped().subscribe((res) => {
        console.log(res);
        this.shopped = res.shopped;
        this.shoppedLength = this.shopped.length;
    });
  }

  ngOnInit() {
    if (localStorage.getItem('liked') !== null) {

      this.liked = JSON.parse(localStorage.getItem('liked'));
      console.log(this.liked);
      this.likedLength = this.liked.length;

    }

    if (localStorage.getItem('shopped') !== null) {
      this.shopped = JSON.parse(localStorage.getItem('shopped'));
      console.log(this.shopped);
      this.shoppedLength = this.shopped.length;
    }

  }


  public openMenu() {
    console.log('opening')
    this.openMenuParam = true;

  }

  public closeMobileMenu() {
    this.openMenuParam = false;
  }

  public goToShopList(value) {
    this.router.navigate(['/seleted-products/' + value]);
  }


}
