const Observable = require("tns-core-modules/data/observable").Observable;
var appsFlyer = require("nativescript-plugin-appsflyer");

function createViewModel() {
    console.log("createViewModel is called ");

    var viewModel = new Observable();

    viewModel.trackEventResponse = "not called yet";
    viewModel.getAppsFlyerUIDResponse = "not called yet";
    viewModel.initSdkResponse = "not initialized yet";
    viewModel.gcdResponse = "GCD isn't called yet";
    viewModel.trackLocationResponse = [];

    viewModel.initSdk = function() {

        console.log("call initSdk ... ");

        var options = {
            devKey:  'WdpTVAcYwmxsaQ4WeTspmh',
            appId: "975313579",
            isDebug: false,
            onConversionDataSuccess: function(_res){
                console.log("Get conversion data success: " + JSON.stringify(_res));
                viewModel.set("gcdResponse", JSON.stringify(_res));
            },
            onConversionDataFail: function(_res){
                console.log("Get conversion data failure: " + JSON.stringify(_res));
                viewModel.set("gcdResponse", JSON.stringify(_res));
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
    viewModel.trackEvent = function() {

        console.log("call trackEvent ... ");

        var options = {
            eventName: "af_add_to_cart",
            eventValues: {
                "af_content_id": "id123",
                "af_currency": "USD",
                "af_revenue": "2"
            },
            onTrackingRequestSuccess: function(_res){
                console.log("onTrackingRequestSuccess results: " + JSON.stringify(_res));
                viewModel.set("trackEventResponse", JSON.stringify(_res));
            },
            onTrackingRequestFailure: function(_res){
                console.log("trackEvent ERROR results  ... " + JSON.stringify(_res));
                viewModel.set("trackEventResponse", JSON.stringify(_res));
            },
        };

        appsFlyer.trackEvent(options).then(function(result) {
            console.log("trackEvent is called");
            viewModel.set("trackEventResponse", JSON.stringify(result));
        }, function(err) {
           console.log("trackEvent ERROR results  ... " + JSON.stringify(err));
           viewModel.set("trackEventResponse", JSON.stringify(err));
        });
    }

    return viewModel;
}

exports.createViewModel = createViewModel;