import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { ChatHomePage } from '../chat-home/chat-home';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private events: Events) { }
  tab1Root = ChatHomePage;
  tab2Root = TestPage;
  tab3Root = ChatHomePage;
}
