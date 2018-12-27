webpackJsonp([0],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHomePageModule", function() { return ChatHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_home__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatHomePageModule = /** @class */ (function () {
    function ChatHomePageModule() {
    }
    ChatHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_home__["a" /* ChatHomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_home__["a" /* ChatHomePage */])
            ],
        })
    ], ChatHomePageModule);
    return ChatHomePageModule;
}());

//# sourceMappingURL=chat-home.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_chat_chat_config__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_chat_chat_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_chat_chat_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_log_log_debug__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_log_log_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_log_log_debug__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var slideSelected = {
    home: 0,
    chatting: 1,
    create_group: 2,
    setting: 3,
};
var ChatHomePage = /** @class */ (function () {
    function ChatHomePage(formBuilder, apiService, events, navCtrl, apiStorage) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.events = events;
        this.navCtrl = navCtrl;
        this.apiStorage = apiStorage;
        this.slideIndex = 0;
        this.title = 'CHAT HOME';
        this.image_default = './assets/imgs/group.jpeg';
        this.message = '';
        this.user = {
            username: 'DINH',
            image: 'https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg',
            nickname: 'nvdinh'
        };
        this.messages = [];
        this.rooms = [];
    }
    ChatHomePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit() - chat-home.ts!');
        this.addFromGroup = this.formBuilder.group({
            room_name: '',
            image: '',
            message: '',
            time: ''
        });
        this.rooms = this.apiStorage.getUserRooms(this.user);
        this.getRoomChating().subscribe(function (data) {
            console.log('Observerable sau 5 giay: ', data);
        });
        //su dung truyen du lieu tu form a-->b ben fom b phai khai dung su kien thi moi
        this.events.publish(__WEBPACK_IMPORTED_MODULE_6__assets_chat_chat_config___default.a.event_register_room, { data: 'chat' });
        //chuyen slide khi su kien click group
        //nguoc lai lang nghe su kien cua form khac truyen cho minh bang lenh 
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_6__assets_chat_chat_config___default.a.event_change_room, (function (data) {
            console.log("Nhan tu form home: " + JSON.stringify(data));
        }));
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_6__assets_chat_chat_config___default.a.event_chat_setting, (function () {
            _this.goToSlide(slideSelected.setting);
        }));
    };
    ChatHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    ChatHomePage.prototype.ionViewWillLeave = function () {
        console.log('this.socket.disconnect()');
    };
    ChatHomePage.prototype.getRoomChating = function () {
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next({
                    room_id: 'testID',
                    room_name: 'testName',
                });
            }, 5000);
        });
        return observable;
    };
    ChatHomePage.prototype.goToSlide = function (i) {
        if (i == 0)
            this.title = "CHAT HOME";
        this.slides.slideTo(i, 500);
    };
    ChatHomePage.prototype.slideChanged = function () {
        this.slideIndex = this.slides.getActiveIndex();
    };
    ChatHomePage.prototype.formAddRoom = function () {
        this.title = "THÊM NHÓM";
        this.goToSlide(2);
        this.addFromGroup = this.formBuilder.group({
            room_name: '',
            image: '',
            message: '',
            time: new Date().getTime()
        });
    };
    ChatHomePage.prototype.goSetting = function () {
        this.title = "SETTING";
        this.goToSlide(3);
    };
    ChatHomePage.prototype.reset = function () {
        location.href = '/';
    };
    ChatHomePage.prototype.selectIcon = function () {
        //this.navCtrl.push(SampleIconsPage);
        alert("selectIcon");
    };
    ChatHomePage.prototype.callSendLog = function () {
        __WEBPACK_IMPORTED_MODULE_7__assets_log_log_debug___default.a.print();
        //Log.get(); -->for send
        __WEBPACK_IMPORTED_MODULE_7__assets_log_log_debug___default.a.reset();
    };
    ChatHomePage.prototype.callLogout = function () {
        var _this = this;
        this.apiService.logout()
            .then(function (d) {
            _this.reset();
        })
            .catch(function (e) { });
    };
    ChatHomePage.prototype.goRoom = function (room) {
        this.title = "CHATTING";
        this.room = room;
        this.messages = this.apiStorage.getUserRoomMessages(this.user, this.room);
        this.goToSlide(slideSelected.chatting);
    };
    ChatHomePage.prototype.onSubmit = function () {
        this.rooms.push({
            name: this.addFromGroup.value.room_name,
            image: this.addFromGroup.value.image,
            message: this.addFromGroup.value.message,
            time: this.addFromGroup.value.time,
            messages: [],
        });
        this.apiStorage.saveUserRooms(this.user, this.rooms);
        this.goToSlide(slideSelected.home);
    };
    ChatHomePage.prototype.sendMessage = function () {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], ChatHomePage.prototype, "slides", void 0);
    ChatHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-home',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-chat-viber\src\pages\chat-home\chat-home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-fab color="royal" (click)="formAddRoom()">\n\n        <ion-icon name="add-circle" ios="ios-add-circle" md="md-add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-buttons end *ngIf="slideIndex>0">\n\n      <button ion-button icon-only color="royal" (click)="goToSlide(0)">\n\n        <ion-icon name="arrow-back" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title style="text-align: center">\n\n      <ion-input id="search" placeholder="Tìm kiếm" *ngIf="slideIndex==0"></ion-input>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="goSetting()">\n\n        <ion-icon name="settings" ios="ios-settings" md="md-settings"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="royal" (click)="listUnread()">\n\n        <ion-icon name="notifications" ios="ios-notifications" md="md-notifications"></ion-icon>\n\n        <ion-badge color="danger" *ngIf="unreadCount > 0">{{ unreadCount }}</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="list-avatar-page">\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n\n    <!-- #id=0 home -->\n\n    <ion-slide>\n\n      <ion-card>\n\n        <ion-list>\n\n          <button class="list-card" ion-item *ngFor="let room of rooms" (click)="goRoom(room)">\n\n            <ion-avatar item-start>\n\n              <img src="{{room.image?room.image:image_default}}">\n\n            </ion-avatar>\n\n            <h2 class="name">{{ room?.name }}</h2>\n\n            <p>{{ room?.message }}</p>\n\n            <ion-note class="time">{{ room?.time | date:\'dd.MM hh:mm\' }}</ion-note>\n\n          </button>\n\n        </ion-list>\n\n      </ion-card>\n\n\n\n    </ion-slide>\n\n\n\n\n\n    <!-- #id=1 chatting -->\n\n    <ion-slide id="contentMessages">\n\n      <ion-grid>\n\n        <ion-row *ngFor="let message of messages">\n\n          <ion-col class="other-avatar" col-2 *ngIf="message?.user?.username !== user?.username">\n\n            <ion-item class="other-avatar">\n\n              <ion-avatar item-start>\n\n                <img src="{{message?.user?.image?message?.user?.image.toLowerCase().indexOf(\'://\')>0?message?.user?.image:(authenticationServer + \'/get-avatar/\' + message?.user?.image + \'?token=\' + token):image_default}}" />\n\n              </ion-avatar>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col class="message other_message" offset-1 col-9 *ngIf="message?.user?.username !== user?.username">\n\n            <div class="nick-name">{{ message?.user?.username }}:</div>\n\n            <br>\n\n            <div class="text-message">{{ message?.text }}</div>\n\n            <br>\n\n            <div class="time">{{message?.created | date:\'dd.MM hh:MM\'}}</div>\n\n          </ion-col>\n\n\n\n          <ion-col class="message my_message" offset-1 col-9 *ngIf="message?.user?.username === user?.username">\n\n            <div class="nick-name">{{ message?.user?.username }}:</div>\n\n            <br>\n\n            <div class="text-message">{{ message?.text }}</div>\n\n            <br>\n\n            <div class="time">{{message?.created | date:\'dd.MM hh:MM\'}}</div>\n\n          </ion-col>\n\n          <ion-col class="other-avatar" col-2 *ngIf="message?.user?.username === user?.username">\n\n            <ion-item class="other-avatar">\n\n              <ion-avatar item-start>\n\n                <img src="{{message?.user?.image?message?.user?.image.toLowerCase().indexOf(\'://\')>0?message?.user?.image:(authenticationServer + \'/get-avatar/\' + message?.user?.image + \'?token=\' + token):image_default}}" />\n\n              </ion-avatar>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-slide>\n\n\n\n\n\n    <!-- #id=2 them nhom -->\n\n    <ion-slide>\n\n\n\n      <form (ngSubmit)="onSubmit()" [formGroup]="addFromGroup" *ngIf="!(isShowInfo)">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="leaf" item-start></ion-icon>\n\n            <ion-label floating>Tên nhóm</ion-label>\n\n            <ion-input type="text" formControlName="room_name"></ion-input>\n\n            <ion-icon name="add" item-end></ion-icon>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="leaf" item-start></ion-icon>\n\n            <ion-label floating>Nhap vao duong dan hinh anh</ion-label>\n\n            <ion-input type="text" formControlName="image"></ion-input>\n\n            <ion-icon name="add" item-end></ion-icon>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="leaf" item-start></ion-icon>\n\n            <ion-label floating>Tin nhan cuoi cung</ion-label>\n\n            <ion-input type="text" formControlName="message"></ion-input>\n\n            <ion-icon name="add" item-end></ion-icon>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-buttons start>\n\n              <button ion-button type="submit" icon-end round>\n\n                Them nhom\n\n                <ion-icon name="share-alt"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n\n\n    </ion-slide>\n\n\n\n    <!-- #id=3 setting -->\n\n    <ion-slide>\n\n      <ion-list no-lines>\n\n\n\n        <ion-item class=\'item-settings\' (click)="selectIcon()">\n\n          <ion-icon name="images" item-start></ion-icon>\n\n          Icons\n\n        </ion-item>\n\n        <ion-item class=\'item-settings\' (click)="callSendLog()">\n\n          <ion-icon name="add" item-start></ion-icon>\n\n          <ion-label>Send Log To Server</ion-label>\n\n        </ion-item>\n\n        <ion-item class=\'item-settings\' (click)="callLogout()">\n\n          <ion-icon name="add" item-start></ion-icon>\n\n          <ion-label>Logout</ion-label>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </ion-slide>\n\n\n\n    <!-- #id=4 -->\n\n\n\n    <!-- #id=5 -->\n\n    <!-- #id=6 -->\n\n  </ion-slides>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-row class="message_row" *ngIf="slideIndex==1">\n\n      <ion-col col-10>\n\n        <ion-item no-lines>\n\n          <ion-input type="text" placeholder="Gõ nội dung tin nhắn cần gửi" [(ngModel)]="message" (keyup.enter)="sendMessage()"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button ion-button type="button" round color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n\n          <ion-icon name="undo"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="icon" *ngIf="slideIndex==0">\n\n      <ion-col col-2>\n\n        <p>Trò chuyện</p>\n\n        <ion-badge ion-button><ion-icon name="person"></ion-icon></ion-badge>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n          <p>Cuộc gọi</p>\n\n          <ion-badge ion-button><ion-icon name="call"></ion-icon></ion-badge>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n          <p>Danh bạ</p>\n\n          <ion-badge ion-button><ion-icon name="contact"></ion-icon></ion-badge>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n          <p>Cộng đồng</p>\n\n          <ion-badge ion-button><ion-icon name="people"></ion-icon></ion-badge>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n          <p>Thêm</p>\n\n          <ion-badge ion-button><ion-icon name="more"></ion-icon></ion-badge>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\dinh-chat-viber\src\pages\chat-home\chat-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__["a" /* ApiStorageService */]])
    ], ChatHomePage);
    return ChatHomePage;
}());

//# sourceMappingURL=chat-home.js.map

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

var log = '' //telemetry log
var trackingLog =  (s,o) => { log += Date.now() + ': ' + s + '\n'; if(o)log += JSON.stringify(o)}
var printLog = ()=>{console.log(log)}
var getLog = () =>{return log}
var resetLog = ()=>{log=''}
module.exports = {
    put: trackingLog,
    get: getLog,
    print: printLog,
    reset: resetLog,
}

/***/ })

});
//# sourceMappingURL=0.js.map