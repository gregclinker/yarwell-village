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

  menu: Menu;
  menuItems: MenuItem[];
  images: Image[];
  selectedMenu: MenuItem;
  menuToggle: boolean;
  pageContent: string;

  constructor(menu: Menu, slideShow: SlideShow) {
    this.menuToggle = false;
    this.menu = menu;
    this.menuItems = menu.menuItems;
    this.images = slideShow.images;
    this.selectedMenu = this.menuItems[0];
    this.pageContent = this.selectedMenu.htmlContent;
  }

  ngOnInit(): void {
    this.pageContent = this.selectedMenu.htmlContent;
  }

  setPageByMenu(menuItem: MenuItem): void {
    this.menuToggle = !this.menuToggle;
    this.selectedMenu = menuItem;
    this.pageContent = this.selectedMenu.htmlContent;
  }

  home(): void {
    this.setPageByMenu(this.menuItems[0]);
    this.menuToggle = false;
  }

  setPageByMenuName(name: string): void {
    this.setPageByMenu(this.menu.getByName(name));
    this.menuToggle = false;
  }
}
