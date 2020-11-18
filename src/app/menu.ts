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
      {name: 'Home', htmlFile: '/assets/pages/home.html', htmlContent: ''},
      {name: 'History', htmlFile: '/assets/pages/history.html', htmlContent: ''},
      {name: 'Village Hall', htmlFile: '/assets/pages/villagehall.html', htmlContent: ''},
      {name: 'Businesses', htmlFile: '/assets/pages/business.html', htmlContent: ''},
      {name: 'Services', htmlFile: '/assets/pages/local.html', htmlContent: ''},
      {name: 'Pub', htmlFile: '/assets/pages/pub.html', htmlContent: ''},
      {name: 'Church', htmlFile: '/assets/pages/church.html', htmlContent: ''},
      {name: 'Schools', htmlFile: '/assets/pages/schools.html', htmlContent: ''},
      {name: 'Parish Council', htmlFile: '/assets/pages/council.html', htmlContent: ''},
      {name: 'Band', htmlFile: '/assets/pages/band.html', htmlContent: ''}
    ];

    this.httpClient = http;
    for (const menuItem of this.menuItems) {
      this.httpClient.get(menuItem.htmlFile, {responseType: 'text'})
        .subscribe(content => menuItem.htmlContent = content);
      console.log('Menu menuItem=' + menuItem.htmlContent);
    }
  }
}

export interface MenuItem {
  name: string;
  htmlFile: string;
  htmlContent: string;
}
