
import * as appModule from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import * as platform from "tns-core-modules/platform";
import {
  InitSDKOptions,
  TrackEventOptions,
} from './index';
import { ad } from 'tns-core-modules/utils/utils';
import stringSetToStringArray = ad.collections.stringSetToStringArray;

let _isDebugLocal = false;

export const initSdk = function (args: InitSDKOptions) {

    return new Promise(function (resolve, reject) {
        try {
            if (typeof(com.appsflyer.AppsFlyerLib) !== "undefined") {

                const appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();

                _isDebugLocal = args.isDebug === true;

                appsFlyerLibInstance.setDebugLog(_isDebugLocal);

                if (_isDebugLocal) {
                    console.log("AF-A :: appsFlyer.initSdk: " + JSON.stringify(args));
                }

                if (args.onConversionDataSuccess || args.onConversionDataFailure) {
                    try {
                        com.appsflyer.AppsFlyerLib.getInstance().registerConversionListener(
                            appModule.android.currentContext || (<any>com).tns.NativeScriptApplication.getInstance(),
                            new com.appsflyer.AppsFlyerConversionListener(<any>{
                              _successCallback: args.onConversionDataSuccess,
                              _failureCallback: args.onConversionDataFailure,
                              onInstallConversionDataLoaded(conversionData: java.util.Map<string, string>): void {
                                if (this._successCallback && typeof this._successCallback === 'function') {
                                  try {
                                    const data = {};
                                    for (const key of stringSetToStringArray(conversionData.keySet())) {
                                      data[key] = conversionData.get(key);
                                    }
                                    this._successCallback(data);
                                  } catch (e) {
                                    console.error(`AF-A :: onInstallConversionDataLoaded Error: ${e}`);
                                  }
                                } else if (typeof this._successCallback !== 'function') {
                                  console.error(`AF-A :: onInstallConversionDataLoaded: callback is not a function`);
                                }
                              },
                              onInstallConversionFailure(error: string): void {
                                if (this._failureCallback && typeof this._failureCallback === 'function') {
                                  try {
                                    this._failureCallback(error);
                                  } catch (e) {
                                    console.error(`AF-A :: onInstallConversionFailure Error: ${e}`);
                                  }
                                } else if (typeof this._failureCallback !== 'function') {
                                  console.error(`AF-A :: onInstallConversionFailure: callback is not a function`);
                                }
                              },
                              onAttributionFailure(param0: string): void {/*ignore*/},
                              onAppOpenAttribution(param0: java.util.Map<any, any>): void {/*ignore*/},
                            }),
                        );
                    } catch (e) {
                        console.error(`AF-A :: registerConversionListener Error:${e}`);
                    }
                }

                _trackAppLaunch(appsFlyerLibInstance);

                appsFlyerLibInstance.startTracking((<any>com).tns.NativeScriptApplication.getInstance(), args.devKey);

                resolve({status: "success"});
            } else {
                reject({status: "failure", message: "com.appsflyer.AppsFlyerLib is not defined"});
            }
        } catch (ex) {
            console.log("Error: " + ex);
            reject(ex);
        }
    });
};

function _trackAppLaunch (_instance: com.appsflyer.AppsFlyerLib) {
  console.log("AppsFlyer :: NativeScript :: trackAppLaunch is called");
  const c = appModule.android.currentContext || (<any>com).tns.NativeScriptApplication.getInstance();
  _instance.trackEvent(c, null, null);
}

export const trackEvent = function (args: TrackEventOptions) {

    return new Promise(function (resolve, reject) {
        try {

            const appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();

            if (_isDebugLocal) {
                console.log("AF-A :: appsFlyer.trackEvent: " + JSON.stringify(args));
            }

            const c = appModule.android.currentContext || (<any>com).tns.NativeScriptApplication.getInstance();

            appsFlyerLibInstance.trackEvent(c, args.eventName, _toValue(args.eventValues));

            resolve({status: "success"});
        } catch (ex) {
            console.log("AF-A :: Error: " + ex);
            reject(ex);
        }
    });
};

export const setCustomerUserId = function (userId: string) {

    return new Promise(function (resolve, reject) {
        try {
            const appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();
            appsFlyerLibInstance.setCustomerUserId(userId);

            resolve({status: "success"});
        } catch (ex) {
            console.log("AF-A :: Error: " + ex);
            reject(ex);
        }
    });
};


export const _toHashMap = function(obj: Object) {
    const node = new java.util.HashMap();
    for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (obj[property] !== null) {
                switch (typeof obj[property]) {
                    case 'object':
                        // note: since this function has no second argument,
                        // it appears the "node" being passed in this recursive call is unused
                        // TypeScript detected this, so commenting out for now
                        node.put(property, _toHashMap(obj[property]/*, node*/));
                        break;
                    case 'boolean':
                        node.put(property, java.lang.Boolean.valueOf(String(obj[property])));
                        break;
                    case 'number':
                        if (Number(obj[property]) === obj[property] && obj[property] % 1 === 0) {
                            node.put(property, java.lang.Long.valueOf(String(obj[property])));
                        } else {
                            node.put(property, java.lang.Double.valueOf(String(obj[property])));
                        }
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

export const _toValue = function(val: any){
    let returnVal = null;
    if (val !== null) {
        switch (typeof val) {
            case 'object':
                returnVal = _toHashMap(val);
                break;
            case 'boolean':
                returnVal = java.lang.Boolean.valueOf(String(val));
                break;
            case 'number':
                if (Number(val) === val && val % 1 === 0) {
                    returnVal = java.lang.Long.valueOf(String(val));
                } else {
                    returnVal = java.lang.Double.valueOf(String(val));
                }
                break;
            case 'string':
                returnVal = String(val);
                break;
        }
    }
    return returnVal;
};
