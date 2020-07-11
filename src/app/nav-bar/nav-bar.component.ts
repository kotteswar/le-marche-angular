import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public openMenuParam:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public openMenu() {
    console.log('opening')
    this.openMenuParam = true;

  }

}
