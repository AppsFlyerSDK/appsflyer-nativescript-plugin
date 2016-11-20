

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

    var options = {
        devKey:  'd3Ac9qPnrpVYZxfWmzCspwL',
        appId: '123456789',
        isDebug: false
    };

    console.log("FESS :: call initSdk ... ");
    appsFlyer.initSdk(options).then(function() {
        console.log("FESS :: initSdk succeeded");
    }, function(reason) {
        console.error("FESS :: Error :: " + reason);
    });


    var viewModel = new Observable();
    viewModel.counter = 2;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }



    return viewModel;
}

exports.createViewModel = createViewModel;