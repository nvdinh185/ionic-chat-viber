import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { YoutubePage } from '../youtube/youtube';
import { ShopPage } from '../shop/shop';
import { HocvienPage } from '../hocvien/hocvien';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }

  home(){
    this.navCtrl.push(HomePage);
  }

  xemPhim(){
    this.navCtrl.push(YoutubePage);
  }

  shop(){
    this.navCtrl.push(ShopPage);
  }

  hocVien(){
    this.navCtrl.push(HocvienPage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }
}
