import { Component } from '@angular/core';
import{ GlobalConstants } from './constants/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sarthak Negi';
  images = [
    GlobalConstants.BACKGROUND_IMAGE_1,
    GlobalConstants.BACKGROUND_IMAGE_2,
    GlobalConstants.PROFILE_IMG,
  ];
  showLoader = true;

  getIsImageLoaded(img: any) {
    return new Promise((resolve, _reject) => {
      img.onload = () => {
        resolve(true);
      };

      img.onerror = () => {
        resolve(false);
      };
    })
  }

  async loadImages() {
    for(let i = 0; i < this.images.length; i++){
      console.log(`Trying to load ${this.images[i]}`);
      let img = new Image();
      img.src = this.images[i];
      const isLoaded = await this.getIsImageLoaded(img);
      console.log(`Image loaded ${isLoaded} at index ${i}`);
    }
    this.showLoader = false;
  }

  ngOnInit() {
    this.loadImages();
  }
}
