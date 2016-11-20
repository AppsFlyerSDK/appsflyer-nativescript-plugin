
var Observable = require("data/observable").Observable;

var appsFlyer = require("nativescript-plugin-appsflyer");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {

    console.log("FESS :: createViewModel is called ");



    var viewModel = new Observable();
      viewModel.counter = 2;
      viewModel.message = getMessage(viewModel.counter);


    viewModel.trackEventResponse = {status: "NA"};
    viewModel.viewModelappsFlyerUID = "not called yet";
    viewModel.initSdkResponse = "not initialized yet";
    viewModel.trackLocation = [];



    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    viewModel.initSdk = function() {

        console.log("FESS :: call initSdk ... ");



        var options = {
            devKey:  'WdpTVAcYwmxsaQ4WeTspmh',
            appId: "975313579",
            isDebug: true
        };

        appsFlyer.initSdk(options).then(function(result) {

            console.log("FESS :: XXXXXXXXXXX  1 " + JSON.stringify(result));

            viewModel.set("initSdkResponse", result.status);

            console.log("FESS :: XXXXXXXXXXX 2 " + viewModel.initSdkResponse);
        }, function(err) {
            viewModel.set("initSdkResponse", err);
        });
    }






    return viewModel;
}

exports.createViewModel = createViewModel;


// var Observable = require("data/observable").Observable;

// function getMessage(counter) {
//     if (counter <= 0) {
//         return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
//     } else {
//         return counter + " taps left";
//     }
// }

// function createViewModel() {
//     var viewModel = new Observable();
//     viewModel.counter = 42;
//     viewModel.message = getMessage(viewModel.counter);

//     viewModel.onTap = function() {
//         this.counter--;
//         this.set("message", getMessage(this.counter));
//     }

//     return viewModel;
// }

// exports.createViewModel = createViewModel;