import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { BookCover } from '../pages/book-cover/book-cover.component';
import { BodyText } from '../pages/body-text/body-text.component';
import { About } from '../pages/about/about.component';
import { PersistentDataService } from './services/persistent-data.service';
import { AnalyticsService } from './services/analytics-service';
//import { InterstitialAdsService } from './services/interstitial-ads.service';

@Component({
  templateUrl: 'app.html',
  providers: [ PersistentDataService,
    //InterstitialAdsService,
    AnalyticsService
  ]
})
export class MyApp {
  rootPage:any = About;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
      protected persistentDataService: PersistentDataService,
      //protected interstitialAdsService: InterstitialAdsService,
      protected analyticsService: AnalyticsService) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });

    platform.ready().then((readySource) => {
      // set version number. tag it correct. Allows app to know database version in future.
      this.persistentDataService.setItemAppVersion(JSON.stringify({major: 1, minor: 1}));
      // only load the main page of the app when device is ready
      this.nav.setRoot(BodyText, {
        alternateID: '_Toc417167144'
      });
      if (readySource == 'cordova') {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      }
    });
  }
}