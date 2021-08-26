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
    return new Promise((resolve, reject) => {
      img.onload = () => {
        resolve(true);
      };

      img.onerror = () => {
        reject(`Could not load ${img.src}`);
      };
    })
  }

  async loadImages() {
    const imageLoadPromisesArray = this.images.map((image) => {
      console.log(`Trying to load ${image}`);
      let img = new Image();
      img.src = image;
      return this.getIsImageLoaded(img);
    });

    Promise.all(imageLoadPromisesArray)
      .then((_result) => {
        this.showLoader = false;
      })
      .catch((err) => {
        console.error('Some error occurred while trying to load the images');
        console.error(err);
        // Continue to the website with not loaded images
        this.showLoader = false;
      });
  }

  ngOnInit() {
    this.loadImages();
  }
}
