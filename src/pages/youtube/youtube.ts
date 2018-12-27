import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {

  constructor(public sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
  }

  url = "https://www.youtube.com/embed/nKWwIuwdBGg";
  list = [1, 2, 3, 4, 5];

  onClick() {
    alert("click me!");
  }

  getPhim(i) {
    switch (i) {
      case 1:
        this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
        break;
      case 2:
        this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
        break;
      case 3:
        this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
        break;
      case 4:
        this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
        break;
      case 5:
        this.url = "https://www.youtube.com/embed/BSrWy-8-XBw";
        break;
      default:
      //code block
    }

  }

}
