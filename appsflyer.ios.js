
var utils = require("utils/utils");
var frame = require("ui/frame");
var platform = require("platform");

var appsFlyer = {};

appsFlyer.isDebugLocal = false;

appsFlyer.appsFlyerTracker = {};


appsFlyer.initSdk = function (args) {

    return new Promise(function (resolve, reject) {
        try {

            if (typeof(AppsFlyerTracker) !== "undefined") {

                appsFlyer.appsFlyerTracker = AppsFlyerTracker.alloc().init();

                appsFlyer.appsFlyerTracker.appleAppID = args.appId;
                appsFlyer.appsFlyerTracker.appsFlyerDevKey = args.devKey;
                appsFlyer.appsFlyerTracker.isDebug = (!args.isDebug) ? true : args.isDebug;

                appsFlyer.isDebugLocal = appsFlyer.appsFlyerTracker.isDebug;

                if(appsFlyer.isDebugLocal === true){console.log("AF-I :: appsFlyer.trackEvent: " + JSON.stringify(args));}

                appsFlyer.appsFlyerTracker.trackAppLaunch();

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


appsFlyer.trackEvent = function (args) {

    return new Promise(function (resolve, reject) {
        try {

            if (typeof(appsFlyer.appsFlyerTracker) !== "undefined") {

                if(appsFlyer.isDebugLocal == true){ console.log("AF-I :: appsFlyer.initSdk: " + JSON.stringify(args)); }

                appsFlyer.appsFlyerTracker.trackEventWithValues(args.eventName, args.eventValues);

                resolve({status: "success"});
            }
            else{
                reject({status: "failure", message: "appsFlyerTracker is not defined, call 1st 'initSdk'"});
            }

        } catch (ex) {
            console.log("AF_IOS ::  Error: " + ex);
            reject(ex);
        }
    });

};

appsFlyer.setCustomerUserId = function (userId) {

        return new Promise(function (resolve, reject) {
            try {

                if (typeof(appsFlyer.appsFlyerTracker) !== "undefined") {


                    appsFlyer.appsFlyerTracker.customerUserID = userId;

                    resolve({status: "success"});
                }
                else{
                    reject({status: "failure", message: "appsFlyerTracker is not defined, call 1st 'initSdk'"});
                }

            } catch (ex) {
                console.log("AF_IOS ::  Error: " + ex);
                reject(ex);
            }
        });

    };

module.exports = appsFlyer;
