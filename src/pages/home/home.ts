import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import chatConfig from '../../assets/chat/chat-config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private events: Events) { }
  
  ngOnInit() {
    this.events.subscribe(chatConfig.event_register_room, ((data) => {
      console.log("Nhan tu form chat: " + JSON.stringify(data));
    }));
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Trang Home load xong');
  }

  goChat() {
    this.navCtrl.setRoot('ChatHomePage'), {
      user: 'abc',
      token: 'chuoi gi do'
    };
  }
}
