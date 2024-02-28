import { Observable, alert } from "@nativescript/core";
import * as appsFlyer from "nativescript-plugin-appsflyer";

export class HelloWorldModel extends Observable {
  options: any;
  gcdResponse: string = "GCD isn't called yet";
  logEventResponse: string = "not called yet";
  getAppsFlyerUIDResponse: string = "not called yet";
  initSdkResponse: string = "not initialized yet";
  logLocationResponse = [];

  constructor() {
    super();
    this.initSdk();
    appsFlyer.enableTCFDataCollection(true);
    appsFlyer.setConsentData({
      isUserSubjectToGDPR: true,
      hasConsentForAdsPersonalization: true,
      hasConsentForDataUsage: true,
    });
    appsFlyer.setAppInviteOneLink("abcd");
    appsFlyer.generateInviteUrl({
      params: {
        channel: "gmail",
        campaign: "myCampaign",
        customerID: 1234,
        brandDomain: "brand.domain.com",
        userParams: {
          myParam: "newUser",
          anotherParam: "fromWeb",
          amount: 1,
        },
      },
      onSuccess: function (link: string) {
        console.log(link);
      },
      onError: function (err: string) {
        console.log(err);
      },
    });
  }

  initSdk() {
    console.log("call initSdk ... ");
    const _this = this;
  
    let options = {
      devKey: "WdpTVAcYwmxsaQ4WeTspmh",
      appId: "975313579",
      isDebug: true,
      manualStart: true,
      timeToWaitForATTUserAuthorization: 10,
      onConversionDataSuccess: function (_res) {
        console.log("Get conversion data success: " + JSON.stringify(_res));
        _this.set("gcdResponse", JSON.stringify(_res));
      },
      onConversionDataFail: function (_res) {
        console.log("Get conversion data failure: " + JSON.stringify(_res));
        _this.set("gcdResponse", JSON.stringify(_res));
      },
      onAppOpenAttribution: function (_res) {
        console.log("onAppOpenAttribution: " + JSON.stringify(_res));
        _this.set("gcdResponse", "onAppOpenAttribution: " + JSON.stringify(_res));

      },
      onAppOpenAttributionFailure: function (_res) {
        console.log("onAppOpenAttributionFailure: " + JSON.stringify(_res));
      },
      onDeepLinking: function (_res) {
        if (_res) {
          console.log("onDeepLinking: " + JSON.parse(_res).deepLink);
          _this.set("gcdResponse", "onDeepLinking: " + JSON.parse(_res).deepLink);
        }
      },
    };
  
    const uid = appsFlyer.getAppsFlyerUID();
    console.log(`AF UID: ${uid}`);
  
    appsFlyer.initSdk(options).then(
      function (result) {
        console.log("initSdk is called");
        const initStatus = `Init SDK Status: ${result.status}`;
        const manualStartStatus = options.manualStart ? "Manual start is enabled." : "Manual start is not enabled.";
        const message = `AppsFlyer UID: ${uid}\n${manualStartStatus}`;
  
        alert({
          title: "Initialization Info",
          message: message,
          okButtonText: "OK",
        });
        
        _this.set("initSdkResponse", message);
      },
      function (err) {
        console.log("initSdk error ... " + JSON.stringify(err));
        const errorMessage = `Error initializing SDK: ${JSON.stringify(err)}`;
        alert({
          title: "Initialization Error",
          message: errorMessage,
          okButtonText: "OK",
        });
        _this.set("initSdkResponse", errorMessage);
      }
    );
  }
  startSdk(){
    appsFlyer.startSdk();
  }

  logEvent() {
    console.log("call logEvent ... ");
    const _this = this;
  
    let options = {
      eventName: "af_add_to_cart",
      eventValues: {
        af_content_id: "id123",
        af_currency: "USD",
        af_revenue: "2",
      },
      onSuccess: function (_res) {
        console.log("onLogEventRequestSuccess results: " + JSON.stringify(_res));
        _this.set("logEventResponse", `Success response: ${JSON.stringify(_res)}\nEvent options: ${JSON.stringify(options, null, 2)}`);
      },
      onError: function (_res) {
        console.log("onLogEventRequestFailure results: " + JSON.stringify(_res));
        _this.set("logEventResponse", `Error response: ${JSON.stringify(_res)}\nEvent options: ${JSON.stringify(options, null, 2)}`);
      },
    };
  
    appsFlyer.logEvent(options).then(
      function (result) {
        console.log("logEvent is called");
        _this.set("logEventResponse", `Result: ${JSON.stringify(result)}\nEvent options: ${JSON.stringify(options, null, 2)}`);
      },
      function (err) {
        console.log("logEvent ERROR results  ... " + JSON.stringify(err));
        _this.set("logEventResponse", `Error: ${JSON.stringify(err)}\nEvent options: ${JSON.stringify(options, null, 2)}`);
      }
    );
  }
}
