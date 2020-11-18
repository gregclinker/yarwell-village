import {Component, OnInit, Input} from '@angular/core';
import {Menu} from '../menu';
import {MENU_ITEMS} from '../menu-itens';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent implements OnInit {
  menuItens = MENU_ITEMS;
  selectedMenu: Menu = MENU_ITEMS[0];
  menuToggle: boolean;
  @Input() contentPage: string;

  constructor() {
    this.menuToggle = false;
    this.contentPage = this.selectedMenu.page;
  }

  ngOnInit(): void {
    console.log('XXXXXXXXXXXXXXXXXX');
  }

  onSelect(menu: Menu): void {
    this.menuToggle = !this.menuToggle;
    this.selectedMenu = menu;
    this.contentPage = menu.page;
    console.log(menu.name + ', page=' + menu.page);
  }
}
