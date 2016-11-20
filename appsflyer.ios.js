
var utils = require("utils/utils");
var frame = require("ui/frame");
var platform = require("platform");


exports.initSdk = function (args) {

    return new Promise(function (resolve, reject) {
        try {

            if (typeof(AppsFlyerTracker) !== "undefined") {

                var appsFlyerTracker = AppsFlyerTracker.alloc().init();

                appsFlyerTracker.appleAppID = args.appId;
                appsFlyerTracker.appsFlyerDevKey = args.devKey;
                appsFlyerTracker.isDebug = (!args.isDebug) ? true : args.isDebug;

                appsFlyerTracker.trackAppLaunch();

                resolve({status: "success"});
            }
            else{
                reject({status: "failure", message: "AppsFlyerTracker is not defined"});
            }

        } catch (ex) {
            console.log("AF_IOS ::  Error: " + ex);
            reject(ex);
        }
    });
};