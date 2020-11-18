import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Menu {

  menuItems: MenuItem[];
  private httpClient: HttpClient;

  constructor(http: HttpClient) {
    console.log('Menu constructor');
    this.menuItems = [
      {name: 'History', htmlFile: '/assets/pages/history.html', html: ''},
      {name: 'Village Hall', htmlFile: '/assets/pages/villagehall.html', html: ''}
    ];

    this.httpClient = http;
    for (const menuItem of this.menuItems) {
      this.httpClient.get(menuItem.htmlFile, {responseType: 'text'})
        .subscribe(content => menuItem.html = content);
      console.log('Menu menuItem=' + menuItem.html);
    }
  }
}

export interface MenuItem {
  name: string;
  htmlFile: string;
  html: string;
}

