import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Menu, MenuItem} from './menu';
import {SlideShow} from './slides';
import {Image} from 'angular-responsive-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'yarwell-village';

  menuItems: MenuItem[];
  images: Image[];
  selectedMenu: MenuItem;
  menuToggle: boolean;
  pageContent: string;

  constructor(menu: Menu, slideShow: SlideShow) {
    this.menuToggle = false;
    this.menuItems = menu.menuItems;
    this.images = slideShow.images;
    this.selectedMenu = this.menuItems[0];
    this.pageContent = this.selectedMenu.htmlContent;
    console.log('AppComponent constr');
  }

  ngOnInit(): void {
    this.pageContent = this.selectedMenu.htmlContent;
  }

  onSelect(menuItem: MenuItem): void {
    this.menuToggle = !this.menuToggle;
    this.selectedMenu = menuItem;
    this.pageContent = this.selectedMenu.htmlContent;
    console.log(menuItem.name + ', page=' + menuItem.htmlFile + ', html=' + menuItem.htmlContent);
  }

  home(): void {
    this.selectedMenu = this.menuItems[0];
    this.pageContent = this.selectedMenu.htmlContent;
    console.log(this.selectedMenu.name + ', page=' + this.selectedMenu.htmlFile + ', html=' + this.selectedMenu.htmlContent);
  }
}
