webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var STORAGE_KEY = 'Cng@3500888';
var sessionStorageAvailable = Object(__WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__["c" /* isStorageAvailable */])(sessionStorage);
var ApiStorageService = /** @class */ (function () {
    //public static authenticationServer = 'https://c3.mobifone.vn/api/auth';
    function ApiStorageService(storage) {
        this.storage = storage;
    }
    ApiStorageService_1 = ApiStorageService;
    ApiStorageService.prototype.doSomethingAwesome = function () {
        var awesomenessLevel = this.storage.get(STORAGE_KEY) || 1337;
        this.storage.set(STORAGE_KEY, awesomenessLevel + 1);
        return awesomenessLevel;
    };
    ApiStorageService.prototype.save = function (key, value) {
        this.storage.set(key, value);
    };
    ApiStorageService.prototype.read = function (key) {
        return this.storage.get(key);
    };
    ApiStorageService.prototype.delete = function (key) {
        this.storage.remove(key);
    };
    ApiStorageService.prototype.getStatus = function () {
        return "Session storage available: " + sessionStorageAvailable;
    };
    ApiStorageService.prototype.saveToken = function (value) {
        this.save('token', value);
    };
    ApiStorageService.prototype.getToken = function () {
        ApiStorageService_1.token = this.read('token');
        return ApiStorageService_1.token;
    };
    ApiStorageService.prototype.deleteToken = function () {
        ApiStorageService_1.token = null;
        this.delete('token');
    };
    ApiStorageService.prototype.saveUserRooms = function (user, rooms) {
        this.save('#rooms#' + user.username, JSON.stringify(rooms));
    };
    ApiStorageService.prototype.deleteUserRooms = function (user) {
        this.delete('#rooms#' + user.username);
    };
    ApiStorageService.prototype.getUserRooms = function (user) {
        try {
            var rooms = JSON.parse(this.read('#rooms#' + user.username));
            return rooms ? rooms : [];
        }
        catch (e) {
            return [];
        }
    };
    ApiStorageService.prototype.saveUserLastTime = function (user, time) {
        this.save('#last_time#' + user.username, time.toString());
    };
    ApiStorageService.prototype.deleteUserLastTime = function (user) {
        this.delete('#last_time#' + user.username);
    };
    ApiStorageService.prototype.getUserLastTime = function (user) {
        try {
            var time = parseInt(this.read('#last_time#' + user.username));
            return time;
        }
        catch (e) {
            return 0;
        }
    };
    ApiStorageService.prototype.saveUserRoomMessages = function (user, room) {
        this.save('#message' + room.name + '#' + user.username, JSON.stringify(room.messages));
        this.saveUserLastTime(user, new Date().getTime());
    };
    ApiStorageService.prototype.getUserRoomMessages = function (user, room) {
        try {
            var messages = JSON.parse(this.read('#message' + room.name + '#' + user.username));
            return messages ? messages : [];
        }
        catch (e) {
            return [];
        }
    };
    ApiStorageService.authenticationServer = 'http://localhost:9235/api/auth';
    ApiStorageService = ApiStorageService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [Object])
    ], ApiStorageService);
    return ApiStorageService;
    var ApiStorageService_1;
}());

//# sourceMappingURL=apiStorageService.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_home_chat_home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__chat_home_chat_home__["a" /* ChatHomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__test_test__["a" /* TestPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\chat-viber\src\pages\home\home.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="ChatHomePage" tabIcon="call"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Test" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\chat-viber\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug__);
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
    function ChatHomePage(formBuilder, apiService, apiStorage) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.apiStorage = apiStorage;
        this.slideIndex = 0;
        this.title = "CHAT HOME";
        this.image_default = './assets/imgs/group.jpeg';
        this.message = '';
        this.user = {
            username: 'DINH',
            image: 'https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg',
            nickname: 'nvdinh'
        };
        this.messages = [];
        this.rooms = [];
        this.show = false;
    }
    /**
     * Lấy danh sách phòng đã lưu xuống đĩa
     */
    ChatHomePage.prototype.ngOnInit = function () {
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
    };
    /**
     * Di chuyển đến slide nào đó
     * @param i
     */
    ChatHomePage.prototype.goToSlide = function (i) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(i, 500);
        this.slides.lockSwipes(true);
    };
    /**
     * Khi thay đổi slide thì lấy chỉ số slide và đặt tên cho titile
     */
    ChatHomePage.prototype.slideChanged = function () {
        this.slideIndex = this.slides.getActiveIndex();
        switch (this.slideIndex) {
            case 0:
                this.show ? this.title = "" : this.title = "CHAT HOME";
                break;
            case 1:
                this.title = "CHATING";
                break;
            case 2:
                this.title = "CREATE GROUP";
                break;
            case 3:
                this.title = "SETTING";
                break;
        }
    };
    /**
     * Thêm phòng
     */
    ChatHomePage.prototype.formAddRoom = function () {
        this.addFromGroup = this.formBuilder.group({
            room_name: '',
            image: '',
            message: '',
            time: new Date().getTime()
        });
        this.goToSlide(2);
    };
    /**
     * Đi đến slide cài đặt
     */
    ChatHomePage.prototype.goSetting = function () {
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
        __WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug___default.a.print();
        //Log.get(); -->for send
        __WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug___default.a.reset();
    };
    ChatHomePage.prototype.callLogout = function () {
        var _this = this;
        this.apiService.logout()
            .then(function (d) {
            _this.reset();
        })
            .catch(function (e) { });
    };
    /**
     * Lấy danh sách tin nhắn của phòng và di chuyển đến slide chatting
     * để hiện các tin nhắn của phòng đó
     * Tham số vào là thông tin phòng muốn di chuyển tới
     * @param room
     */
    ChatHomePage.prototype.goRoom = function (room) {
        this.room = room;
        this.messages = this.apiStorage.getUserRoomMessages(this.user, this.room);
        this.goToSlide(slideSelected.chatting);
    };
    /**
     * Lưu thông tin phòng mới vào đĩa
     */
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
    /**
     * Lấy nội dung chat để thêm vào danh sách chat đang có,
     * đồng thời lưu danh sách chat này xuống đĩa
     */
    ChatHomePage.prototype.sendMessage = function () {
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
    };
    /**
     * Hàm này khi thực hiện chức năng search-bar
     * @param event
     */
    ChatHomePage.prototype.getItems = function (event) {
        this.rooms = this.apiStorage.getUserRooms(this.user);
        var val = event.target.value;
        if (val && val.trim() != '') {
            this.rooms = this.rooms.filter(function (room) {
                return (room.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    /**
     * Xóa tất cả các phòng đã lưu trong đĩa
     */
    ChatHomePage.prototype.deleteAllRoom = function () {
        this.apiStorage.deleteUserRooms(this.user);
        alert("Da xoa!");
    };
    /**
     * Xóa tin nhắn của phòng hiện tại đã lưu trong đĩa
     * Bằng cách gán mảng tin nhắn đó bằng []
     * rồi sau đó thực hiện lưu mảng này xuống đĩa
     */
    ChatHomePage.prototype.deleteMessage = function () {
        this.room.messages = [];
        this.apiStorage.saveUserRoomMessages(this.user, this.room);
        alert("Da xoa!");
    };
    /**
     * Hiện cửa sổ search-bar
     */
    ChatHomePage.prototype.showSearch = function () {
        this.show = !this.show;
        this.show ? this.title = "" : this.title = "CHAT HOME";
    };
    ChatHomePage.prototype.deleteRoom = function (name) {
        console.log(name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Slides */])
    ], ChatHomePage.prototype, "slides", void 0);
    ChatHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-home',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\chat-viber\src\pages\chat-home\chat-home.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button *ngIf="slideIndex==0" (click)="formAddRoom()" icon-only>\n\n        <ion-icon name="add-circle" ios="ios-add-circle" md="md-add-circle"></ion-icon>\n\n      </button>\n\n      <button ion-button *ngIf="slideIndex==0" (click)="showSearch()" icon-only>\n\n        <ion-icon name="search" ios="ios-search" md="md-search"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="goToSlide(0)" *ngIf="slideIndex>0">\n\n        <ion-icon name="arrow-back" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="goSetting()" icon-only>\n\n        <ion-icon name="settings" ios="ios-settings" md="md-settings"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="listUnread()" icon-only>\n\n        <ion-icon name="notifications" ios="ios-notifications" md="md-notifications"></ion-icon>\n\n        <ion-badge color="danger" *ngIf="unreadCount > 0">{{ unreadCount }}</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-searchbar (ionInput)="getItems($event)" *ngIf="show && slideIndex==0"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="list-avatar-page">\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n\n    <!-- #id=0 home -->\n\n    <ion-slide>\n\n      <ion-card>\n\n        <ion-list>\n\n          <ion-item-sliding *ngFor="let room of rooms">\n\n            <ion-item>\n\n              <button class="list-card" ion-item (click)="goRoom(room)">\n\n                <ion-avatar item-start>\n\n                  <img src="{{room.image?room.image:image_default}}">\n\n                </ion-avatar>\n\n                <h2 class="name">{{ room?.name }}</h2>\n\n                <p>{{ room?.message }}</p>\n\n                <ion-note>{{ room?.time | date:\'dd.MM hh:mm\' }}</ion-note>\n\n              </button>\n\n            </ion-item>\n\n            <ion-item-options>\n\n              <button ion-button color="danger" (click)="deleteRoom(room.name)">\n\n                <ion-icon name="trash" ios="ios-trash"></ion-icon>\n\n                Delete\n\n              </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-card>\n\n      <button ion-button (click)="deleteAllRoom()" *ngIf="rooms.length>0">DELETE ALL ROOM</button>\n\n    </ion-slide>\n\n\n\n    <!-- #id=1 chatting -->\n\n    <ion-slide>\n\n      <button ion-button (click)="deleteMessage()" *ngIf="messages.length>0">DELETE MESSAGE</button>\n\n      <ion-grid>\n\n        <ion-row *ngFor="let message of messages">\n\n          <ion-col class="other-avatar" col-2 *ngIf="message?.user?.username !== user?.username">\n\n            <ion-item class="other-avatar">\n\n              <ion-avatar item-start>\n\n                <img src="{{message?.user?.image?message?.user?.image.toLowerCase().indexOf(\'://\')>0?message?.user?.image:(authenticationServer + \'/get-avatar/\' + message?.user?.image + \'?token=\' + token):image_default}}" />\n\n              </ion-avatar>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col class="message other_message" offset-1 col-9 *ngIf="message?.user?.username !== user?.username">\n\n            <div class="nick-name">{{ message?.user?.username }}:</div>\n\n            <br>\n\n            <div class="text-message">{{ message?.text }}</div>\n\n            <br>\n\n            <div class="time">{{message?.created | date:\'dd.MM hh:mm\'}}</div>\n\n          </ion-col>\n\n\n\n          <ion-col class="message my_message" offset-1 col-9 *ngIf="message?.user?.username === user?.username">\n\n            <div class="nick-name">{{ message?.user?.username }}:</div>\n\n            <br>\n\n            <div class="text-message">{{ message?.text }}</div>\n\n            <br>\n\n            <div class="time">{{message?.created | date:\'dd.MM hh:mm\'}}</div>\n\n          </ion-col>\n\n          <ion-col class="other-avatar" col-2 *ngIf="message?.user?.username === user?.username">\n\n            <ion-item class="other-avatar">\n\n              <ion-avatar item-start>\n\n                <img src="{{message?.user?.image?message?.user?.image.toLowerCase().indexOf(\'://\')>0?message?.user?.image:(authenticationServer + \'/get-avatar/\' + message?.user?.image + \'?token=\' + token):image_default}}" />\n\n              </ion-avatar>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-slide>\n\n\n\n\n\n    <!-- #id=2 them nhom -->\n\n    <ion-slide>\n\n      <form (ngSubmit)="onSubmit()" [formGroup]="addFromGroup" *ngIf="!(isShowInfo)">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="leaf" item-start></ion-icon>\n\n            <ion-label floating>Tên nhóm</ion-label>\n\n            <ion-input type="text" formControlName="room_name"></ion-input>\n\n            <ion-icon name="add" item-end></ion-icon>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="leaf" item-start></ion-icon>\n\n            <ion-label floating>Nhap vao duong dan hinh anh</ion-label>\n\n            <ion-input type="text" formControlName="image"></ion-input>\n\n            <ion-icon name="add" item-end></ion-icon>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-icon name="leaf" item-start></ion-icon>\n\n            <ion-label floating>Tin nhan cuoi cung</ion-label>\n\n            <ion-input type="text" formControlName="message"></ion-input>\n\n            <ion-icon name="add" item-end></ion-icon>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-buttons start>\n\n              <button ion-button type="submit" icon-end round>\n\n                Them nhom\n\n                <ion-icon name="share-alt"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n    </ion-slide>\n\n\n\n    <!-- #id=3 setting -->\n\n    <ion-slide>\n\n      <ion-list no-lines>\n\n\n\n        <ion-item class=\'item-settings\' (click)="selectIcon()">\n\n          <ion-icon name="images" item-start></ion-icon>\n\n          Icons\n\n        </ion-item>\n\n        <ion-item class=\'item-settings\' (click)="callSendLog()">\n\n          <ion-icon name="add" item-start></ion-icon>\n\n          <ion-label>Send Log To Server</ion-label>\n\n        </ion-item>\n\n        <ion-item class=\'item-settings\' (click)="callLogout()">\n\n          <ion-icon name="add" item-start></ion-icon>\n\n          <ion-label>Logout</ion-label>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar *ngIf="slideIndex==1">\n\n    <ion-row class="message_row">\n\n      <ion-col col-10>\n\n        <ion-item no-lines>\n\n          <ion-input type="text" placeholder="Gõ nội dung tin nhắn cần gửi" [(ngModel)]="message"\n\n            (keyup.enter)="sendMessage()"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button ion-button round color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n\n          <ion-icon name="undo"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\chat-viber\src\pages\chat-home\chat-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__["a" /* ApiStorageService */]])
    ], ChatHomePage);
    return ChatHomePage;
}());

//# sourceMappingURL=chat-home.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiStorageService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_rsa__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_rsa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_node_rsa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiAuthService = /** @class */ (function () {
    function ApiAuthService(httpClient, apiStorageService, reqInterceptor) {
        this.httpClient = httpClient;
        this.apiStorageService = apiStorageService;
        this.reqInterceptor = reqInterceptor;
        this.authenticationServer = __WEBPACK_IMPORTED_MODULE_2__apiStorageService__["a" /* ApiStorageService */].authenticationServer;
        this.clientKey = new __WEBPACK_IMPORTED_MODULE_5_node_rsa___default.a({ b: 512 }, { signingScheme: 'pkcs1-sha256' }); //for decrypte
        this.midleKey = new __WEBPACK_IMPORTED_MODULE_5_node_rsa___default.a(null, { signingScheme: 'pkcs1-sha256' }); //for test
        this.serverKey = new __WEBPACK_IMPORTED_MODULE_5_node_rsa___default.a(null, { signingScheme: 'pkcs1-sha256' }); //for crypte
        //key nay de test thu noi bo
        this.midleKey.importKey(this.clientKey.exportKey('public'));
    }
    ApiAuthService.prototype.getServerPublicRSAKey = function () {
        var _this = this;
        //console.log('get Public key');
        if (this.publicKey && this.publicKey.PUBLIC_KEY) {
            //console.log('Public key from in session');
            return (new Promise(function (resolve, reject) {
                try {
                    _this.serverKey.importKey(_this.publicKey.PUBLIC_KEY);
                }
                catch (err) {
                    reject(err); //bao loi khong import key duoc
                }
                resolve(_this.serverKey);
            }));
        }
        else {
            //console.log('get Public key from server');
            return this.httpClient.get(this.authenticationServer + '/key-json')
                .toPromise()
                .then(function (jsonData) {
                _this.publicKey = jsonData;
                //console.log('co tra ve');
                if (_this.publicKey && _this.publicKey.PUBLIC_KEY) {
                    try {
                        _this.serverKey.importKey(_this.publicKey.PUBLIC_KEY);
                    }
                    catch (err) {
                        throw err;
                    }
                    return _this.serverKey;
                }
                else {
                    throw new Error('No PUBLIC_KEY exists!');
                }
            });
        }
    };
    ApiAuthService.prototype.login = function (formData) {
        var _this = this;
        this.reqInterceptor.setRequestToken(null); //login nguoi khac
        return this.httpClient.post(this.authenticationServer + '/login', formData)
            .toPromise()
            .then(function (data) {
            _this.userToken = data;
            _this.reqInterceptor.setRequestToken(_this.userToken.token); //login nguoi khac
            return _this.userToken.token;
        });
    };
    ApiAuthService.prototype.logout = function () {
        var _this = this;
        //xoa bo token luu tru
        this.apiStorageService.deleteToken();
        if (this.userToken && this.userToken.token) {
            //truong hop user co luu tren session thi xoa session di
            this.reqInterceptor.setRequestToken(this.userToken.token); //login nguoi khac
            return this.httpClient.get(this.authenticationServer + '/logout')
                .toPromise()
                .then(function (data) {
                //console.log(data);
                _this.userToken = null; //reset token nay
                _this.reqInterceptor.setRequestToken(null);
                return true; //tra ve nguyen mau data cho noi goi logout xu ly
            })
                .catch(function (err) {
                //xem nhu da logout khong cap luu tru
                //console.log(err);
                _this.reqInterceptor.setRequestToken(null);
                _this.userToken = null; //reset token nay
                return true; //tra ve nguyen mau data cho noi goi logout xu ly
            });
        }
        else {
            return (new Promise(function (resolve, reject) {
                resolve(true);
            }));
        }
    };
    ApiAuthService.prototype.register = function (formData) {
        return this.httpClient.post(this.authenticationServer + '/register', formData)
            .toPromise()
            .then(function (data) {
            return data;
        });
    };
    ApiAuthService.prototype.editUser = function (formData) {
        //them token vao truoc khi edit
        this.reqInterceptor.setRequestToken(this.userToken.token);
        return this.httpClient.post(this.authenticationServer + '/edit', formData)
            .toPromise()
            .then(function (data) {
            return data;
        });
    };
    //lay thong tin nguoi dung de edit
    ApiAuthService.prototype.getEdit = function () {
        var _this = this;
        if (this.userToken && this.userToken.token) {
            //them token vao truoc khi edit
            this.reqInterceptor.setRequestToken(this.userToken.token);
            return this.httpClient.get(this.authenticationServer + '/get-user')
                .toPromise()
                .then(function (jsonData) {
                _this.userSetting = jsonData;
                return jsonData;
            });
        }
        else {
            return (new Promise(function (resolve, reject) {
                _this.userSetting = null;
                reject({ error: 'No token, please login first' }); //bao loi khong import key duoc
            }));
        }
    };
    //get userInfo from token
    ApiAuthService.prototype.getUserInfo = function () {
        //this.userInfo=null;
        try {
            this.userInfo = __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default.a.decode(this.userToken.token);
            //console.log(this.userInfo);
            //chuyen doi duong dan image de truy cap anh dai dien
            if (this.userInfo.image
                &&
                    this.userInfo.image.toLowerCase()
                &&
                    this.userInfo.image.toLowerCase().indexOf('http://') < 0
                &&
                    this.userInfo.image.toLowerCase().indexOf('https://') < 0) {
                //chuyen doi duong dan lay tai nguyen tai he thong
                this.userInfo.image = this.authenticationServer
                    + '/get-avatar/'
                    + this.userInfo.image
                    + '?token=' + this.userToken.token;
                //console.log(this.userInfo.image);
            }
        }
        catch (err) {
            this.userInfo = null;
        }
        return this.userInfo;
    };
    ApiAuthService.prototype.getUserInfoSetting = function () {
        if (this.userSetting.URL_IMAGE
            &&
                this.userSetting.URL_IMAGE.toLowerCase()
            &&
                this.userSetting.URL_IMAGE.toLowerCase().indexOf('http://') < 0
            &&
                this.userSetting.URL_IMAGE.toLowerCase().indexOf('https://') < 0) {
            //chuyen doi duong dan lay tai nguyen tai he thong
            this.userSetting.URL_IMAGE = this.authenticationServer
                + '/get-avatar/'
                + this.userSetting.URL_IMAGE
                + '?token=' + this.userToken.token;
            //console.log(this.userSetting.URL_IMAGE);
        }
        return this.userSetting;
    };
    /**
     * Thiet lap token tu local xem nhu da login
     * @param token
     */
    /* pushToken(token){
        //gan token cho user de xem nhu da login
        this.userToken={token:token};
    } */
    /**
     * Gui len server kiem tra token co verify thi tra ve token, khong thi khong ghi
     * @param token
     */
    ApiAuthService.prototype.authorize = function (token) {
        var _this = this;
        this.reqInterceptor.setRequestToken(token); //login nguoi khac
        return this.httpClient.get(this.authenticationServer + '/authorize')
            .toPromise()
            .then(function (data) {
            //console.log(data);                
            _this.userToken = { token: token };
            return true;
        })
            .catch(function (err) {
            //console.log(err);
            return false;
        });
    };
    ApiAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__["a" /* RequestInterceptor */]])
    ], ApiAuthService);
    return ApiAuthService;
}());

//# sourceMappingURL=apiAuthService.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var token;
var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
    }
    RequestInterceptor.prototype.intercept = function (request, next) {
        if (token) {
            //console.log('request with token interceptor!')
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        return next.handle(request);
    };
    RequestInterceptor.prototype.setRequestToken = function (tk) {
        if (tk) {
            token = tk;
        }
        else {
            token = '';
        }
    };
    RequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RequestInterceptor);
    return RequestInterceptor;
}());

//# sourceMappingURL=requestInterceptor.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestPage = /** @class */ (function () {
    function TestPage() {
    }
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\chat-viber\src\pages\test\test.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button showWhen="ios" icon-only>\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button color="secondary" icon-only>\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Primary</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-toolbar>\n\n    <ion-title>This is the title that never ends. It just goes on and on my friend.</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only showWhen="ios">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button color="secondary" icon-only>\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Default</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button showWhen="ios" icon-only>\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button color="secondary" icon-only>\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Primary</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button showWhen="ios" icon-only class="activated">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="activated">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button color="secondary" icon-only class="activated">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Primary.activated</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="secondary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only color="primary">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-start solid>\n\n        <ion-icon name="contact"></ion-icon>\n\n        Solid\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Secondary</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-end solid color="danger">\n\n        Help\n\n        <ion-icon name="help-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="secondary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only color="primary" class="activated">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-start solid class="activated">\n\n        <ion-icon name="contact"></ion-icon>\n\n        Solid\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Secondary Activated</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-end solid color="danger" class="activated">\n\n        Help\n\n        <ion-icon name="help-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="dark">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only outline>\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-start outline>\n\n        <ion-icon name="star"></ion-icon>\n\n        Star\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="secondary" outline>\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Dark</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="dark">\n\n    <ion-buttons start>\n\n      <button ion-button outline icon-only class="activated">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n      <button ion-button outline icon-start class="activated">\n\n        <ion-icon name="star"></ion-icon>\n\n        Star\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button color="secondary" outline icon-only class="activated">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Dark.activated</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="danger">\n\n    <ion-buttons start>\n\n      <button ion-button icon-start>\n\n        <ion-icon name="contact"></ion-icon>\n\n        Clear\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-end>\n\n        Edit\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Danger</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="danger">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="star"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Danger</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="light">\n\n    <ion-buttons start>\n\n      <button ion-button icon-start>\n\n        <ion-icon name="contact"></ion-icon>\n\n        Clear\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-end>\n\n        Edit\n\n        <ion-icon name="create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Light</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="light">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="star"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Light</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar transparent>\n\n    <ion-buttons end>\n\n      <button ion-button #button1 icon-only (click)="buttonClick(button1)">\n\n        <ion-icon name="star"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Transparent</ion-title>\n\n    <button ion-button menuToggle right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color="greyYellow">\n\n    <ion-title>Grey Yellow</ion-title>\n\n  </ion-toolbar>\n\n  <ion-toolbar color="greyWhite">\n\n    <ion-title>Grey White</ion-title>\n\n  </ion-toolbar>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\chat-viber\src\pages\test\test.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(319);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_test_test__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_home_chat_home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_webstorage_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_apiStorageService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_apiAuthService__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_apiImageService__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_apiChattingService__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__interceptors_requestInterceptor__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__interceptors_responseInterceptor__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_home_chat_home__["a" /* ChatHomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_webstorage_service__["b" /* StorageServiceModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_home_chat_home__["a" /* ChatHomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__services_apiAuthService__["a" /* ApiAuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_apiImageService__["a" /* ApiImageService */],
                __WEBPACK_IMPORTED_MODULE_11__services_apiStorageService__["a" /* ApiStorageService */],
                __WEBPACK_IMPORTED_MODULE_14__services_apiChattingService__["a" /* ApiChattingService */],
                __WEBPACK_IMPORTED_MODULE_15__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_15__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_16__interceptors_responseInterceptor__["a" /* ResponseInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\chat-viber\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\IONIC_Baitap\chat-viber\src\app\app.html"*/
        })
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 493:
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

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiImageService = /** @class */ (function () {
    function ApiImageService() {
    }
    //dua vao doi tuong file image
    //tra ve doi tuong file image co kich co nho hon
    ApiImageService.prototype.resizeImage = function (filename, file, newSize) {
        return new Promise(function (resolve, reject) {
            try {
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                var maxW = newSize;
                var maxH = newSize;
                var img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.onload = function () {
                    var iw = img.width;
                    var ih = img.height;
                    var scale = Math.min((maxW / iw), (maxH / ih));
                    var iwScaled = iw * scale;
                    var ihScaled = ih * scale;
                    canvas.width = iwScaled;
                    canvas.height = ihScaled;
                    context.drawImage(img, 0, 0, iwScaled, ihScaled);
                    //image.src=canvas.toDataURL(); //gan canvas cho image viewer
                    //xu ly chat luong anh qua cac tham so cua ham toDataURL()
                    //chuyen sang file de ghi xuong dia hoac truyen tren mang
                    //su dung ham toBlob sau
                    canvas.toBlob(function (blob) {
                        var reader = new FileReader();
                        reader.readAsArrayBuffer(blob); //ket qua la mot mang Uint8Array 
                        reader.onload = function () {
                            //console.log(reader.result); //ket qua la mot mang Uint8Array 
                            //newFile la mot file image da duoc resize roi nhe
                            resolve({
                                imageViewer: canvas.toDataURL(),
                                file: new Blob([reader.result], { type: 'image/png' }),
                                name: filename
                            });
                        };
                    });
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ApiImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiImageService);
    return ApiImageService;
}());

//# sourceMappingURL=apiImageService.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiChattingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiChattingService = /** @class */ (function () {
    function ApiChattingService() {
    }
    ApiChattingService.prototype.setting = function (session) {
        this.session = session;
    };
    ApiChattingService.prototype.getSession = function () {
        return this.session;
    };
    ApiChattingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiChattingService);
    return ApiChattingService;
}());

//# sourceMappingURL=apiChattingService.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http___ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor() {
    }
    ResponseInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http___["e" /* HttpResponse */]) {
                //console.log('May chu cho phep va truy cap voi event:');
                //console.log(event);
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http___["d" /* HttpErrorResponse */]) {
                console.log('May chu Khong cho phep hoac loi:');
                console.log(err);
            }
        });
    };
    ResponseInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ResponseInterceptor);
    return ResponseInterceptor;
}());

//# sourceMappingURL=responseInterceptor.js.map

/***/ })

},[298]);
//# sourceMappingURL=main.js.map