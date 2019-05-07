import { Component } from '@angular/core';

import { ChatHomePage } from '../chat-home/chat-home';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor() {}
  tab1Root = ChatHomePage;
  tab2Root = TestPage;
}
