const Observable = require("@nativescript/core").Observable;

var appsFlyer = require("nativescript-plugin-appsflyer");

function createViewModel() {
    console.log("createViewModel is called ");

    var viewModel = new Observable();

    viewModel.logEventResponse = "not called yet";
    viewModel.getAppsFlyerUIDResponse = "not called yet";
    viewModel.initSdkResponse = "not initialized yet";
    viewModel.gcdResponse = "GCD isn't called yet";
    viewModel.logLocationResponse = [];

    viewModel.initSdk = function() {

        console.log("call initSdk ... ");
 
        var options = {
            devKey:  'WdpTVAcYwmxsaQ4WeTspmh',
            appId: "975313579",
            isDebug: true,
            timeToWaitForATTUserAuthorization: 60,
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
                console.log("onDeepLinking: " + _res);
            },
        };

        appsFlyer.initSdk(options).then(function(result) {
            console.log("initSdk is called");
            viewModel.set("initSdkResponse", result.status);
        }, function(err) {
            console.log("initSdk error  ... " +  JSON.stringify(err));
            viewModel.set("initSdkResponse", JSON.stringify(err));
        });
    };
    viewModel.logEvent = function() {

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
    viewModel.setSharingFilter = function(partners) {
        console.log("call setSharingFilter with the following partners: " + partners);

        appsFlyer.setSharingFilter(partners).then(function(result) {
            console.log("setSharingFilter is called");
            viewModel.set("setSharingFilterResponse", result.status);
        }, function(err) {
            console.log("setSharingFilter error  ... " +  JSON.stringify(err));
            viewModel.set("setSharingFilter Response", JSON.stringify(err));
        });
    };
    
    viewModel.setSharingFilterForAllPartners = function() {

        console.log("call setSharingFilterForAllPartners ... ");

        appsFlyer.setSharingFilterForAllPartners().then(function(result) {
            console.log("setSharingFilterForAllPartners is called");
            viewModel.set("setSharingFilterForAllPartners", result.status);
        }, function(err) {
            console.log("setSharingFilterForAllPartners error  ... " +  JSON.stringify(err));
            viewModel.set("setSharingFilterForAllPartners Response", JSON.stringify(err));
        });
    };

    return viewModel;
}
exports.createViewModel = createViewModel;

