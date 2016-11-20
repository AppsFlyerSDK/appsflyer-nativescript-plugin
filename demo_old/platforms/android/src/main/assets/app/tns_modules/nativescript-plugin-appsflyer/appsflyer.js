var application = require("application");
var applicationSettings = require("application-settings");
var utils = require("utils/utils");
var types = require("utils/types");
var frame = require("ui/frame");
var platform = require("platform");

exports.available = function () {

    console.log("AF_ANDROID :: available 1");

    return new Promise(function (resolve, reject) {
        try {
            var currentDevice = utils.ios.getter(UIDevice, UIDevice.currentDevice);

            var device = currentDevice.name;

            console.log("AF_ANDROID :: available device=" + device);

            resolve(device.toLowerCase().indexOf("simulator") === -1 && MFMailComposeViewController.canSendMail());
        } catch (ex) {
            console.log("AF_ANDROID :: Error in email.available: " + ex);
            reject(ex);
        }
    });
};

exports.initSdk = function (args) {

    console.log("initSdk 1");

    var that = this;


    return new Promise(function (resolve, reject) {
        try {

            if (!that.available()) {
                //reject("No mail available");
            }

             console.log("AF_ANDROID :: initSdk 2");

            if (typeof(AppsFlyerTracker) !== "undefined") {
                console.log("AF_ANDROID :: initSdk 3 AppsFlyerTracker");
            }

            if (typeof(AppsFlyerTracker) !== "undefined") {
                console.log("AF_ANDROID :: initSdk 3 AppsFlyerTracker " + typeof(AppsFlyerTracker));


                 var appsFlyerTracker = AppsFlyerTracker.alloc().init();
               //var appsFlyerTracker = AppsFlyerTracker.new();
                //var appsFlyerTracker = new AppsFlyerTracker();
                 console.log(appsFlyerTracker instanceof AppsFlyerTracker); // true
                // console.log(object instanceof NSObject); // true
                // console.log(object instanceof Object); // true

                console.log("AF_ANDROID :: appsFlyerTracker initialized :)");


                console.log("AF_ANDROID :: initSdk args: " + JSON.stringify(args));
                console.log("AF_ANDROID :: initSdk 3 sharedTracker " + typeof(appsFlyerTracker));


                appsFlyerTracker.appleAppID = args.appId;
                appsFlyerTracker.appsFlyerDevKey = args.devKey;
                appsFlyerTracker.isDebug = (!args.isDebug) ? true : args.isDebug;

                console.log("AF_ANDROID :: initSdk 3 sharedTracker call trackAppLaunch");

                appsFlyerTracker.trackAppLaunch();
            }


            resolve(true);

        } catch (ex) {
            console.log("Error: " + ex);
            reject(ex);
        }
    });
};

