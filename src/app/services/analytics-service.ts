import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';

interface AnalyticsPageLog {
  fromPageNumber: number,
  totalPages: number
}

interface AnalyticsTocGotoLog {
  elementId: string,
  innerHTML: string
}

@Injectable()
export class AnalyticsService {
  _firebase: any;
  constructor(firebase: Firebase) {
    this._firebase = firebase;
  }

  public logEventScrollForwardOnePage(data : AnalyticsPageLog): void {
      if (Firebase) this._firebase.logEvent('scrollForwardOnePage', data);
      console.log('tsc: Analytics logged logEventScrollForwardOnePage: ' + JSON.stringify(data));
  }

  public logEventScrollBackwardsOnePage(data : AnalyticsPageLog): void {
      if (Firebase) this._firebase.logEvent('scrollBackwardsOnePage', data);
      console.log('tsc: Analytics logged scrollBackwardsOnePage: ' + JSON.stringify(data));
  }

  public logEventOnTocGoto(data: AnalyticsTocGotoLog): void {
      if (Firebase) this._firebase.logEvent('onTocGoto', data);
      console.log('tsc: Analytics logged logEventOnTocGoto: ' + JSON.stringify(data));
  }
};
