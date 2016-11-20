
var appModule = require("application");
var utils = require("utils/utils");
var types = require("utils/types");
var frame = require("ui/frame");
var platform = require("platform");



exports.available = function () {

console.log("AF_ANDROID :: available 1");

  return new Promise(function (resolve, reject) {

// console.log("AF_ANDROID :: available 2");

    try {
      var uri = android.net.Uri.fromParts("mailto", "eddyverbruggen@gmail.com", null);
      var intent = new android.content.Intent(android.content.Intent.ACTION_SENDTO, uri);
      var packageManager = com.tns.NativeScriptApplication.getInstance().getPackageManager();
      var nrOfMailApps = packageManager.queryIntentActivities(intent, 0).size();
      resolve(nrOfMailApps > 0);
    } catch (ex) {
      console.log("Error in email.available: " + ex);
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

             //console.log("AF_ANDROID :: initSdk 2");


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

