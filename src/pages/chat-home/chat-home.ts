import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { FormGroup, FormBuilder } from '@angular/forms';

import { ApiAuthService } from '../../services/apiAuthService';
import { ApiStorageService } from '../../services/apiStorageService';
import Log from '../../assets/log/log-debug';

var slideSelected = {
  home: 0,
  chatting: 1,
  create_group: 2,
  setting: 3,
}

@Component({
  selector: 'page-chat-home',
  templateUrl: 'chat-home.html'
})

export class ChatHomePage {
  @ViewChild(Slides) slides: Slides;

  slideIndex = 0;
  title = "CHAT HOME";
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
    private apiStorage: ApiStorageService) { }

  /**
   * Lấy danh sách phòng đã lưu xuống đĩa
   */
  ngOnInit() {
    //ngăn không cho vuốt giữa các slide
    this.slides.lockSwipes(true);
    //gán ban đầu cho addFormGroup
    this.addFromGroup = this.formBuilder.group({
      room_name: '',
      image: '',
      message: '',
      time: ''
    });
    //Lấy danh sách phòng đã lưu xuống đia
    this.rooms = this.apiStorage.getUserRooms(this.user);
  }

  /**
   * Di chuyển đến slide nào đó
   * @param i 
   */
  goToSlide(i) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(i, 500);
    this.slides.lockSwipes(true);
  }

  /**
   * Khi thay đổi slide thì lấy chỉ số slide và đặt tên cho titile
   */
  slideChanged() {
    this.slideIndex = this.slides.getActiveIndex();
    switch (this.slideIndex) {
      case 0: this.show ? this.title = "" : this.title = "CHAT HOME";
        break;
      case 1: this.title = "CHATING";
        break;
      case 2: this.title = "CREATE GROUP";
        break;
      case 3: this.title = "SETTING";
        break;
    }
  }

  /**
   * Thêm phòng
   */
  formAddRoom() {
    this.addFromGroup = this.formBuilder.group({
      room_name: '',
      image: '',
      message: '',
      time: new Date().getTime()
    });
    this.goToSlide(2);
  }

  /**
   * Đi đến slide cài đặt
   */
  goSetting() {
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

  /**
   * Lấy danh sách tin nhắn của phòng và di chuyển đến slide chatting
   * để hiện các tin nhắn của phòng đó
   * Tham số vào là thông tin phòng muốn di chuyển tới
   * @param room 
   */
  goRoom(room) {
    this.room = room;
    this.messages = this.apiStorage.getUserRoomMessages(this.user, this.room);
    this.goToSlide(slideSelected.chatting);
  }

  /**
   * Lưu thông tin phòng mới vào đĩa
   */
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

  /**
   * Lấy nội dung chat để thêm vào danh sách chat đang có,
   * đồng thời lưu danh sách chat này xuống đĩa
   */
  sendMessage() {
    this.messages.push({
      user: this.user,
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

  /**
   * Hàm này khi thực hiện chức năng search-bar
   * @param event 
   */
  getItems(event) {
    this.rooms = this.apiStorage.getUserRooms(this.user);
    var val = event.target.value;

    if (val && val.trim() != '') {
      this.rooms = this.rooms.filter((room) => {
        return (room.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /**
   * Xóa tất cả các phòng đã lưu trong đĩa
   */
  deleteAllRoom() {
    this.apiStorage.deleteUserRooms(this.user);
    alert("Da xoa!");
  }

  /**
   * Xóa tin nhắn của phòng hiện tại đã lưu trong đĩa
   * Bằng cách gán mảng tin nhắn đó bằng []
   * rồi sau đó thực hiện lưu mảng này xuống đĩa
   */
  deleteMessage() {
    this.room.messages = [];
    this.apiStorage.saveUserRoomMessages(this.user, this.room);
    alert("Da xoa!");
  }

  show: boolean = false;
  /**
   * Hiện cửa sổ search-bar
   */
  showSearch() {
    this.show = !this.show;
    this.show ? this.title = "" : this.title = "CHAT HOME";
  }

  deleteRoom(name) {
    console.log(name);
  }
}