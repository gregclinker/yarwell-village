import {Injectable} from '@angular/core';
import {Image} from 'angular-responsive-carousel';

@Injectable({
  providedIn: 'root'
})
export class SlideShow {

  images: Image[];

  constructor() {
    this.images = [
      {path: '/assets/images/homepage-banners/banner-01.jpg'},
      {path: '/assets/images/homepage-banners/banner-02.jpg'},
      {path: '/assets/images/homepage-banners/banner-03.jpg'},
      {path: '/assets/images/homepage-banners/banner-04.jpg'},
      {path: '/assets/images/homepage-banners/banner-05.jpg'},
      {path: '/assets/images/homepage-banners/banner-06.jpg'},
      {path: '/assets/images/homepage-banners/banner-07.jpg'},
      {path: '/assets/images/homepage-banners/banner-08.jpg'},
      {path: '/assets/images/homepage-banners/banner-09.jpg'},
      {path: '/assets/images/homepage-banners/banner-10.jpg'},
      {path: '/assets/images/homepage-banners/banner-11.jpg'},
      {path: '/assets/images/homepage-banners/banner-12.jpg'},
      {path: '/assets/images/homepage-banners/banner-13.jpg'},
      {path: '/assets/images/homepage-banners/banner-14.jpg'},
      {path: '/assets/images/homepage-banners/banner-15.jpg'},
      {path: '/assets/images/homepage-banners/banner-16.jpg'},
      {path: '/assets/images/homepage-banners/banner-17.jpg'},
      {path: '/assets/images/homepage-banners/banner-18.jpg'},
      {path: '/assets/images/homepage-banners/banner-19.jpg'},
      {path: '/assets/images/homepage-banners/banner-20.jpg'},
      {path: '/assets/images/homepage-banners/banner-21.jpg'},
      {path: '/assets/images/homepage-banners/banner-22.jpg'},
      {path: '/assets/images/homepage-banners/banner-23.jpg'}
    ];
  }
}
