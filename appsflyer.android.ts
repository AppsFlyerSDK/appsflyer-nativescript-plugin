import  { Application, Utils } from "@nativescript/core";

import {
  InitSDKOptions,
  LogEventOptions,
} from './index';

const stringSetToStringArray = Utils.ad.collections.stringSetToStringArray;

let _isDebugLocal = false;
let _appsFlyerConversionListener = undefined;
let _appsFlyerRequestListener = undefined;

export const initSdk = function (args: InitSDKOptions) {

    return new Promise(function (resolve, reject) {
        try {
            if (typeof(com.appsflyer.AppsFlyerLib) !== "undefined") {

                const appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();

                _isDebugLocal = args.isDebug;

                appsFlyerLibInstance.setDebugLog(_isDebugLocal);

                if (args.onConversionDataSuccess || args.onConversionDataFail) {
                    try {
                        _appsFlyerConversionListener = new com.appsflyer.AppsFlyerConversionListener(<any>{
                              _gcdSuccessCallback: args.onConversionDataSuccess,
                              _gcdFailureCallback: args.onConversionDataFail,
                              _oaoaSuccessCallback: args.onAppOpenAttribution,
                              _oaoaFailureCallback: args.onAppOpenAttributionFailure,

                              onConversionDataSuccess(conversionData: java.util.Map<string, string>): void {
                                if (!this._gcdSuccessCallback) {
                                  return;
                                }
                                if (typeof this._gcdSuccessCallback === 'function') {
                                  try {
                                    const data = {};
                                    for (const key of stringSetToStringArray(conversionData.keySet())) {
                                      data[key] = conversionData.get(key);
                                    }
                                    this._gcdSuccessCallback(data);
                                    printLogs("onConversionDataSuccess: " + JSON.stringify(args));
                                  } catch (e) {
                                    printLogs(`onConversionDataSuccess Error: ${e}`);
                                  }
                                } else {
                                    printLogs(`onConversionDataSuccess: callback is not a function`);
                                }
                              },
                              onConversionDataFail(error: string): void {
                                if (!this._gcdFailureCallback) {
                                  return;
                                }
                                if (typeof this._gcdFailureCallback === 'function') {
                                  try {
                                    this._gcdFailureCallback(error);
                                    printLogs("onConversionDataFail error: " + error);
                                  } catch (e) {
                                    printLogs(`onConversionDataFail Error: ${e}`);
                                  }
                                } else {
                                    printLogs("onConversionDataFail: callback is not a function");
                                }
                              },
                              onAttributionFailure(error: string): void {
                                if (!this._oaoaFailureCallback) {
                                  return;
                                }
                                if (typeof this._oaoaFailureCallback === 'function') {
                                  try {
                                    this._oaoaFailureCallback(error);
                                    printLogs("onAttributionFailure error: " + error);
                                  } catch (e) {
                                    printLogs(`onAttributionFailure Error: ${e}`);
                                  }
                                } else {
                                    printLogs("onAttributionFailure: callback is not a function");
                                }
                              },
                              onAppOpenAttribution(onAppOpenAttributionData: java.util.Map<any, any>): void {
                                if (!this._oaoaSuccessCallback) {
                                  return;
                                }
                                if (typeof this._oaoaSuccessCallback === 'function') {
                                  try {
                                    let data = {};
                                    for (const key of stringSetToStringArray(onAppOpenAttributionData.keySet())) {
                                        data[key] = onAppOpenAttributionData.get(key);
                                    }

                                    printLogs("onAppOpenAttribution: " + JSON.stringify(data));
                                  } catch (e) {
                                    printLogs(`onAppOpenAttribution Error: ${e}`);
                                  }
                                } else {
                                    printLogs(`onAppOpenAttribution: callback is not a function`);
                                }
                               },
                            });                        
                    } catch (e) {
                        printLogs(`registerConversionListener Error:${e}`);
                    }
                }

                if(args.onDeepLinking){
                  try{
                    appsFlyerLibInstance.subscribeForDeepLink(new com.appsflyer.deeplink.DeepLinkListener(<any>{
                      _onDeepLinkingCallback: args.onDeepLinking,
                      onDeepLinking(deepLinkResult: Object): void {
                        printLogs(`DeepLinkResult: ${deepLinkResult.toString()}`);
                        this._onDeepLinkingCallback(deepLinkResult.toString());
                      }
                    }));
                  } catch(e){
                    printLogs(`onDeepLinking Error: ${e}`);
                  }
                }

                appsFlyerLibInstance.init(args.devKey,_appsFlyerConversionListener,(Application.android.context || (<any>com).tns.NativeScriptApplication.getInstance()));

                _start(appsFlyerLibInstance);

                appsFlyerLibInstance.start((<any>com).tns.NativeScriptApplication.getInstance());

                resolve({status: "success"});
            } else {
                reject({status: "failure", message: "com.appsflyer.AppsFlyerLib is not defined"});
            }
        } catch (ex) {
            printLogs("Error: " + ex);
            reject(ex);
        }
    });
};

function _start (_instance: com.appsflyer.AppsFlyerLib) {
    printLogs("start is called");

  const c = Application.android.context || (<any>com).tns.NativeScriptApplication.getInstance();
  _instance.logEvent(c, null, null);
}

export const logEvent = function (args: LogEventOptions) {

    return new Promise(function (resolve, reject) {
        try {
            if (args.onSuccess || args.onError) {
                try {
                    _appsFlyerRequestListener = new com.appsflyer.attribution.AppsFlyerRequestListener(<any>{
                          _successCallback: args.onSuccess,
                          _failureCallback: args.onError,
                          onSuccess(): void {
                            if (!this._successCallback) {
                              return;
                            }
                            if (typeof this._successCallback === 'function') {
                              try {
                                this._successCallback(args);
                                printLogs("logEvent success: " + JSON.stringify(args));
                              } catch (e) {
                                printLogs(`onLogEventRequestSuccess Error: ${e}`);
                              }
                            } else {
                                printLogs(`onLogEventRequestSuccess: callback is not a function`);
                            }
                            resolve({status: args});
                          },
                          onError(error: string): void {
                            if (!this._failureCallback) {
                              return;
                            }
                            if (typeof this._failureCallback === 'function') {
                              try {
                                this._failureCallback(error);
                                printLogs("logEvent error: " + error);
                              } catch (e) {
                                    printLogs(`onLogEventRequestFailure Error: ${e}`);
                              }
                            } else {
                                printLogs(`onLogRequestFailure: callback is not a function`);
                            }
                            resolve({status: "failure"});
                          },
                        });
                } catch (e) {
                        printLogs(`AppsFlyerRequestListener Error:${e}`);

                }
            }
            const appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();
            const c = Application.android.context || (<any>com).tns.NativeScriptApplication.getInstance();
            appsFlyerLibInstance.logEvent(c, args.eventName, _toValue(args.eventValues), _appsFlyerRequestListener);
            
            
        } catch (ex) {
            printLogs("Error: " + ex);
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
            printLogs("setCustomerUserId Error: " + ex);
            reject(ex);
        }
    });
};

export const setSharingFilter = function (partners: Array<string>) {

  return new Promise(function (resolve, reject) {
      try {
          const appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();
          appsFlyerLibInstance.setSharingFilter(partners);

          resolve({status: "success"});
      } catch (ex) {
          printLogs("setSharingFilter Error: " + ex);
          reject(ex);
      }
  });
};
export const setSharingFilterForAllPartners = function () {

  return new Promise(function (resolve, reject) {
      try {
          const appsFlyerLibInstance = com.appsflyer.AppsFlyerLib.getInstance();
          appsFlyerLibInstance.setSharingFilterForAllPartners();

          resolve({status: "success"});
      } catch (ex) {
          printLogs("setSharingFilterForAllPartners Error: " + ex);
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

function printLogs(logs){
    if (_isDebugLocal) {
        console.log("AppsFlyer :: " + logs);
    }
}