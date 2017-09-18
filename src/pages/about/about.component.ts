import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-about',
  templateUrl: 'about.component.html'
})
export class About {

  constructor(public navCtrl: NavController, statusBar: StatusBar) {
    statusBar.show();
  }

}
