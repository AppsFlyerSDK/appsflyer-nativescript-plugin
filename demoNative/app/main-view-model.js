const Observable = require("tns-core-modules/data/observable").Observable;
var appsFlyer = require("nativescript-plugin-appsflyer");

function createViewModel() {

    console.log("FESS :: createViewModel is called ");



    var viewModel = new Observable();


    viewModel.trackEventResponse = "not called yet";
    viewModel.getAppsFlyerUIDResponse = "not called yet";
    viewModel.initSdkResponse = "not initialized yet";
    viewModel.gcdResponse = "GCD isn't called yet";
    viewModel.trackLocationResponse = [];

    viewModel.initSdk = function() {

        console.log("FESS :: call initSdk ... ");

        var options = {
            devKey:  'pJtNoWRvepn9EBtYG4jAUQ',
            appId: "0546560375",
            isDebug: true,
            onConversionDataSuccess: function(_res){
                //console.log("gcd success: " + JSON.stringify(_res));
                viewModel.set("gcdResponse", JSON.stringify(_res));
            },
            onConversionDataFailure: function(_res){
                //console.log("gcd failure: " + JSON.stringify(_res));
                viewModel.set("gcdResponse", JSON.stringify(_res));
            },
        };

        appsFlyer.initSdk(options).then(function(result) {
            viewModel.set("initSdkResponse", result.status);
        }, function(err) {
            console.log("initSdk :: results  ... " +  JSON.stringify(err));
            viewModel.set("initSdkResponse", JSON.stringify(err));
        });
    };
    viewModel.trackEvent = function() {

        console.log("FESS :: call trackEvent ... ");

        var options = {
            eventName: "af_add_to_cart",
            eventValues: {
                "af_content_id": "id123",
                "af_currency": "USD",
                "af_revenue": "2"
            }
        };

        appsFlyer.trackEvent(options).then(function(result) {

            console.log("trackEvent :: results  ... " + JSON.stringify(result));

            viewModel.set("trackEventResponse", JSON.stringify(result));
        }, function(err) {
            console.log("trackEvent :: ERROR results  ... " + JSON.stringify(err));
            viewModel.set("trackEventResponse", JSON.stringify(err));
        });
    }






    return viewModel;
}

exports.createViewModel = createViewModel;