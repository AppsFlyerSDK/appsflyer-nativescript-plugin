import { Observable } from "@nativescript/core";

var appsFlyer = require("nativescript-plugin-appsflyer");

export class HelloWorldModel extends Observable {
    options: any;
    viewModel: Observable;

  constructor(viewModel: Observable) {
    super()

    this.viewModel = viewModel
    
    this.options = {
      devKey:  'WdpTVAcYwmxsaQ4WeTspmh',
      appId: "975313579",
      isDebug: true,
      timeToWaitForATTUserAuthorization: 10,
      onConversionDataSuccess: function(_res){
          console.log("Get conversion data success: " + JSON.stringify(_res));
          viewModel.set("gcdResponse", JSON.stringify(_res));
      },
      onConversionDataFail: function(_res){
          console.log("Get conversion data failure: " + JSON.stringify(_res));
          viewModel.set("gcdResponse", JSON.stringify(_res));
      },
      onAppOpenAttribution: function(_res){
          console.log("onAppOpenAttribution: " + JSON.stringify(_res));
      },
      onAppOpenAttributionFailure: function(_res){
          console.log("onAppOpenAttributionFailure: " + JSON.stringify(_res));
      },
      onDeepLinking: function(_res){
        if(_res){
            console.log("onDeepLinking: " + JSON.parse(_res).deepLink);
        }
      },
    };
  }
    initSdk(){
        console.log("call initSdk ... ");

        appsFlyer.initSdk(this.options).then(function(result) {
            console.log("initSdk is called");
            this.viewModel.set("initSdkResponse", result.status);
        }, function(err) {
            console.log("initSdk error  ... " +  JSON.stringify(err));
            this.viewModel.set("initSdkResponse", JSON.stringify(err));
        });
    };

     logEvent(viewModel : Observable) {

        console.log("call logEvent ... ");

        var options = {
            eventName: "af_add_to_cart",
            eventValues: {
                af_content_id: "id123",
                af_currency: "USD",
                af_revenue: "2"
            },
            onSuccess: function(_res){
                console.log("onLogEventRequestSuccess results: " + JSON.stringify(_res));
                viewModel.set("logEventResponse", JSON.stringify(_res));
            },
            onError: function(_res){
                console.log("onLogEventRequestFailure results: " + JSON.stringify(_res));
                viewModel.set("logEventResponse", JSON.stringify(_res));
            },
        };

        appsFlyer.logEvent(options).then(function(result) {
            console.log("logEvent is called");
            viewModel.set("logEventResponse", JSON.stringify(result));
        }, function(err) {
           console.log("logEvent ERROR results  ... " + JSON.stringify(err));
           viewModel.set("logEventResponse", JSON.stringify(err));
        });
    }
    
}

