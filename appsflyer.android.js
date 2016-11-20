
var appModule = require("application");
var utils = require("utils/utils");
var frame = require("ui/frame");
var platform = require("platform");


exports.initSdk = function (args) {



    return new Promise(function (resolve, reject) {
        try {

            if (typeof(com.appsflyer.AppsFlyerLib) !== "undefined") {

                var instance = com.appsflyer.AppsFlyerLib.getInstance();

                var isDebug = (!args.isDebug) ? true : args.isDebug;

                instance.setDebugLog(isDebug);

                if(isDebug == true){ console.log("AppsFlyer :: NativeScript  :: Starting Tracking");}
                trackAppLaunch();

                instance.startTracking(com.tns.NativeScriptApplication.getInstance(), args.devKey);

                resolve({status: "success"});
            }
            else{
                reject({status: "failure", message: "com.appsflyer.AppsFlyerLib is not defined"});
            }
        } catch (ex) {
            console.log("Error: " + ex);
            reject(ex);
        }
    });

function trackAppLaunch(){
    console.log("AppsFlyer :: NativeScript :: trackAppLaunch is called");
        var c = appModule.android.currentContext;
        com.appsflyer.AppsFlyerLib.getInstance().trackEvent(c, null, null);
    }
};

