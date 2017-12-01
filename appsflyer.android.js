
var appModule = require("application");
var utils = require("utils/utils");
var frame = require("ui/frame");
var platform = require("platform");

var appsFlyer = {};

appsFlyer.isDebugLocal = false;

appsFlyer.initSdk = function (args) {

    return new Promise(function (resolve, reject) {
        try {

            if (typeof(com.appsflyer.AppsFlyerLib) !== "undefined") {

                var appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();

                //console.log("AF_Android ::  appsFlyerLibInstance: initSdk: " + getMethods(appsFlyer.appsFlyerLibInstance));

                var isDebug = args.isDebug || false;

                appsFlyer.isDebugLocal = isDebug;

                appsFlyerLibInstance.setDebugLog(isDebug);

                if(appsFlyer.isDebugLocal == true){ console.log("aAF-A :: ppsFlyer.initSdk: " + JSON.stringify(args)); }
                trackAppLaunch(appsFlyerLibInstance);

                appsFlyerLibInstance.startTracking(com.tns.NativeScriptApplication.getInstance(), args.devKey);

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

function trackAppLaunch(_instance){
    console.log("AppsFlyer :: NativeScript :: trackAppLaunch is called");
        var c = appModule.android.currentContext;
        _instance.trackEvent(c, null, null);
    }
};



appsFlyer.trackEvent = function (args) {

    return new Promise(function (resolve, reject) {
        try {

            var appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();

            if(appsFlyer.isDebugLocal === true){console.log("AF-A :: appsFlyer.trackEvent: " + JSON.stringify(args));}

            var c = appModule.android.currentContext;

            appsFlyerLibInstance.trackEvent(c, args.eventName, appsFlyer.toValue(args.eventValues));

            resolve({status: "success"});
        } catch (ex) {
            console.log("AF-A :: Error: " + ex);
            reject(ex);
        }
    });
};

appsFlyer.setCustomerUserId = function (userId) {

        return new Promise(function (resolve, reject) {
            try {

                var appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();
                appsFlyerLibInstance.setCustomerUserId(userId);

                resolve({status: "success"});
            } catch (ex) {
                console.log("AF-A :: Error: " + ex);
                reject(ex);
            }
        });
    };


appsFlyer.toHashMap = function(obj) {
    var node = new java.util.HashMap();
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (obj[property] !== null) {
                switch (typeof obj[property]) {
                    case 'object':
                        node.put(property, appsFlyer.toHashMap(obj[property], node));
                        break;
                    case 'boolean':
                        node.put(property, java.lang.Boolean.valueOf(String(obj[property])));
                        break;
                    case 'number':
                        if (Number(obj[property]) === obj[property] && obj[property] % 1 === 0)
                            node.put(property, java.lang.Long.valueOf(String(obj[property])));
                        else
                            node.put(property, java.lang.Double.valueOf(String(obj[property])));
                        break;
                    case 'string':
                        node.put(property, String(obj[property]));
                        break;
                }
            }
        }
    }
    return node;
};

appsFlyer.toValue = function(val){
    var returnVal = null;
    if (val !== null) {
        switch (typeof val) {
            case 'object':
                returnVal = appsFlyer.toHashMap(val);
                break;
            case 'boolean':
                returnVal = java.lang.Boolean.valueOf(String(val));
                break;
            case 'number':
                if (Number(val) === val && val % 1 === 0)
                    returnVal = java.lang.Long.valueOf(String(val));
                else
                    returnVal = java.lang.Double.valueOf(String(val));
                break;
            case 'string':
                returnVal = String(val);
                break;
        }
    }
    return returnVal;
};

// function getMethods(obj) {
//     var result = [];
//     for (var id in obj) {
//         try {
//             if (typeof(obj[id]) == "function") {
//                 result.push(id + ": " + obj[id].toString());
//             }
//         } catch (err) {
//             result.push(id + ": inaccessible");
//         }
//     }
//     return result;
// }

module.exports = appsFlyer;
