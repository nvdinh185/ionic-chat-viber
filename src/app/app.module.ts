import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { YoutubePage } from '../pages/youtube/youtube';
import { ShopPage } from '../pages/shop/shop'
import { BuyoutPage } from '../pages/buyout/buyout'
import { HeaderPage } from '../pages/header/header'
import { FooterPage } from '../pages/footer/footer'
import { HocvienPage } from '../pages/hocvien/hocvien'
import { DetailHvPage } from '../pages/detail-hv/detail-hv'
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register'
import { MuahoasessionPage } from '../pages/muahoasession/muahoasession'
import { XemhoasessionPage } from '../pages/xemhoasession/xemhoasession'

import { GetHocVienProvider } from '../providers/get-hoc-vien/get-hoc-vien';
import { PostUserProvider } from '../providers/post-user/post-user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    YoutubePage,
    ShopPage,
    BuyoutPage,
    HeaderPage,
    FooterPage,
    HocvienPage,
    DetailHvPage,
    LoginPage,
    RegisterPage,
    MuahoasessionPage,
    XemhoasessionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    YoutubePage,
    ShopPage,
    BuyoutPage,
    HeaderPage,
    FooterPage,
    HocvienPage,
    DetailHvPage,
    LoginPage,
    RegisterPage,
    MuahoasessionPage,
    XemhoasessionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetHocVienProvider,
    PostUserProvider
  ]
})
export class AppModule {}
