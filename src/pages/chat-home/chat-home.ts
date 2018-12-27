import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Events, Slides, IonicPage, NavParams, ToastController, Content } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ApiAuthService } from '../../services/apiAuthService';
import { ApiStorageService } from '../../services/apiStorageService';
import chatConfig from '../../assets/chat/chat-config';
import Log from '../../assets/log/log-debug';

var slideSelected = {
  home: 0,
  chatting: 1,
  create_group: 2,
  setting: 3,
}

@IonicPage()
@Component({
  selector: 'page-chat-home',
  templateUrl: 'chat-home.html'
})

export class ChatHomePage {
  @ViewChild(Slides) slides: Slides;

  slideIndex = 0;
  title = 'CHAT HOME';
  image_default = './assets/imgs/group.jpeg';

  message: string = '';

  user = {
    username: 'DINH',
    image: 'https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg',
    nickname: 'nvdinh'
  };
  messages = [];
  room: any;
  rooms = [];

  public addFromGroup: FormGroup;
  public contentMessages;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiAuthService,
    private events: Events,
    private navCtrl: NavController,
    private apiStorage: ApiStorageService) { }

  ngOnInit() {
    console.log('ngOnInit() - chat-home.ts!');

    this.addFromGroup = this.formBuilder.group({
      room_name: '',
      image: '',
      message: '',
      time: ''
    });

    this.rooms = this.apiStorage.getUserRooms(this.user);

    this.getRoomChating().subscribe(data => {
      console.log('Observerable sau 5 giay: ', data);
    })


    //su dung truyen du lieu tu form a-->b ben fom b phai khai dung su kien thi moi
    this.events.publish(chatConfig.event_register_room, { data: 'chat' });


    //chuyen slide khi su kien click group
    //nguoc lai lang nghe su kien cua form khac truyen cho minh bang lenh 
    this.events.subscribe(chatConfig.event_change_room, ((data) => {
      console.log("Nhan tu form home: " + JSON.stringify(data));
    }));

    this.events.subscribe(chatConfig.event_chat_setting, (() => {
      this.goToSlide(slideSelected.setting);
    }));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillLeave() {
    console.log('this.socket.disconnect()');
  }

  getRoomChating() {
    let observable = new Observable(observer => {
      setTimeout(() => {
        observer.next({
          room_id: 'testID',
          room_name: 'testName',
        });
      }, 5000);
    });
    return observable;
  }



  goToSlide(i) {
    if(i==0) this.title = "CHAT HOME";
    this.slides.slideTo(i, 500);
  }

  slideChanged() {
    this.slideIndex = this.slides.getActiveIndex();
  }

  formAddRoom() {
    this.title = "THÊM NHÓM";
    this.goToSlide(2);
    this.addFromGroup = this.formBuilder.group({
      room_name: '',
      image: '',
      message: '',
      time: new Date().getTime()
    });
  }

  goSetting(){
    this.title = "SETTING";
    this.goToSlide(3);
  }

  reset() {
    location.href = '/';
  }

  selectIcon() {
    //this.navCtrl.push(SampleIconsPage);
    alert("selectIcon");
  }

  callSendLog() {
    Log.print();
    //Log.get(); -->for send
    Log.reset();
  }

  callLogout() {
    this.apiService.logout()
      .then(d => {
        this.reset();
      })
      .catch(e => { });
  }

  goRoom(room) {
    this.title = "CHATTING";
    this.room = room;

    this.messages = this.apiStorage.getUserRoomMessages(this.user, this.room);

    this.goToSlide(slideSelected.chatting);
  }
  onSubmit() {
    this.rooms.push({
      name: this.addFromGroup.value.room_name,
      image: this.addFromGroup.value.image,
      message: this.addFromGroup.value.message,
      time: this.addFromGroup.value.time,
      messages: [],
    });

    this.apiStorage.saveUserRooms(this.user, this.rooms);

    this.goToSlide(slideSelected.home);
  }


  sendMessage() {
    this.messages.push({
      user: { username: this.user.username, image: this.user.image, nickname: this.user.nickname },
      text: this.message,
      created: new Date().getTime()
    });
    
    this.messages.push({
      user: { username: 'CUONG', image: '', nickname: 'cuongdq' },
      text: 'HII: ' + this.message,
      created: new Date().getTime()
    });

    this.room.messages = this.room.messages.concat(this.messages);
    
    this.apiStorage.saveUserRoomMessages(this.user, this.room);

    this.message = '';
    this.room.messages = [];
  }
}