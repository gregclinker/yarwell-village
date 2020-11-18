import {Component, OnInit} from '@angular/core';
import {Menu, MenuItem} from './menuItems';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'yarwell-village';

  menuItems: MenuItem[];
  selectedMenu: MenuItem;
  menuToggle: boolean;
  pageContent = '<h1>hello greg</h1>';

  constructor(menu: Menu) {
    this.menuToggle = false;
    this.menuItems = menu.menuItems;
    this.selectedMenu = this.menuItems[0];
    this.pageContent = this.selectedMenu.html;
    console.log('AppComponent constr');
  }

  ngOnInit(): void {
    this.pageContent = this.selectedMenu.html;
    console.log('AppComponent pageContent=' + this.selectedMenu.name + ',html=' + this.selectedMenu.html);
    console.log('AppComponent onInit');
  }

  onSelect(menuItem: MenuItem): void {
    this.menuToggle = !this.menuToggle;
    this.selectedMenu = menuItem;
    this.pageContent = menuItem.html;
    console.log(menuItem.name + ', page=' + menuItem.htmlFile + ', html=' + menuItem.html);
  }
}
