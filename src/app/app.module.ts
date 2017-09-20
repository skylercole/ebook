import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { SmscClearIdsDirective } from './directives/smsc-clear-ids.directive';
import { SmscColumnScrollDirective } from './directives/smsc-column-scroll.directive';
import { SmscBookContentComponent } from './components/smsc-book-content.component';
import { BookCover } from '../pages/book-cover/book-cover.component';
import { BodyText } from '../pages/body-text/body-text.component';
import { About } from '../pages/about/about.component';
import { GoToPageNumber } from '../pages/go-to-page-number/go-to-page-number.component';
import { StyleChange } from '../pages/style-change/style-change.component';
import { Insomnia } from '@ionic-native/insomnia';
import { Firebase } from '@ionic-native/firebase';
import { NativeStorage } from '@ionic-native/native-storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    BookCover,
    SmscClearIdsDirective,
    SmscColumnScrollDirective,
    SmscBookContentComponent,
    GoToPageNumber,
    StyleChange,
    BodyText,
    About
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookCover,
    GoToPageNumber,
    StyleChange,
    BodyText,
    About
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Insomnia,
    Firebase,
    NativeStorage,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
