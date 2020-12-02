
import { 
  Utils
} from '@nativescript/core';

import {
  InitSDKOptions,
  LogEventOptions,
} from './index';

const nsArrayToJSArray = Utils.ios.collections.nsArrayToJSArray;

let _isDebugLocal = false;

let _conversionDataDelegate;

export const initSdk = function (args: InitSDKOptions) {

    return new Promise(function (resolve, reject) {
        try {
            if (typeof(AppsFlyerLib) !== "undefined") {

                AppsFlyerLib.shared().appleAppID = args.appId;
                AppsFlyerLib.shared().appsFlyerDevKey = args.devKey;
                AppsFlyerLib.shared().isDebug = args.isDebug === true;

                _isDebugLocal = AppsFlyerLib.shared().isDebug;

                if (_isDebugLocal) {
                    console.log("AF-I :: appsFlyer.initSdk: " + JSON.stringify(args));
                }

                if (args.onConversionDataSuccess || args.onConversionDataFail) {
                  try {
                    _conversionDataDelegate = ConversionDataDelegate.initWithCallbacks(
                      args.onConversionDataSuccess,
                      args.onConversionDataFail
                    );
                    AppsFlyerLib.shared().delegate = _conversionDataDelegate;
                  } catch (e) {
                    console.error(`AF-I :: delegate assignment Error: ${e}`);
                  }
                }

                AppsFlyerLib.shared().start();

                resolve({status: "success"});
            } else {
                reject({status: "failure", message: "AppsFlyer is not defined"});
            }
        } catch (ex) {
            console.log("AF_IOS ::  Error: " + ex);
            reject(ex);
        }
    });
};


export const logEvent = function (args: LogEventOptions) {

    return new Promise(function (resolve, reject) {
        try {

            if (typeof(AppsFlyerLib) !== "undefined") {

                if (_isDebugLocal) {
                    console.log("AF-I :: appsFlyer.logEvent: " + JSON.stringify(args));
                }

                AppsFlyerLib.shared().logEventWithValues(args.eventName, <any> args.eventValues);

                resolve({status: "success"});
            } else {
                reject({status: "failure", message: "AppsFlyer is not defined, call 1st 'initSdk'"});
            }

        } catch (ex) {
            console.log("AF_IOS ::  Error: " + ex);
            reject(ex);
        }
    });

};

export const setCustomerUserId = function (userId: string) {

    return new Promise(function (resolve, reject) {
        try {

            if (typeof(AppsFlyerLib) !== "undefined") {

              AppsFlyerLib.shared().customerUserID = userId;

                resolve({status: "success"});
            } else {
                reject({status: "failure", message: "AppsFlyer is not defined, call 1st 'initSdk'"});
            }

        } catch (ex) {
            console.log("AF_IOS ::  Error: " + ex);
            reject(ex);
        }
    });
};

@NativeClass
class ConversionDataDelegate extends NSObject implements AppsFlyerLibDelegate {
    public static ObjCProtocols = [AppsFlyerLibDelegate];

    private _successCallback: (obj: Object) => void;
    private _failureCallback: (err: string) => void;

    public static initWithCallbacks(
      successCallback: (obj: Object) => void,
      failureCallback: (err: string) => void,
    ): ConversionDataDelegate {
      const delegate: ConversionDataDelegate = ConversionDataDelegate.new() as ConversionDataDelegate;
      delegate._successCallback = successCallback;
      delegate._failureCallback = failureCallback;
      return delegate;
    }

    public onConversionDataSuccess(installData: NSDictionary<string, string>): void {
      if (!this._successCallback) {
        return;
      }
      if (typeof this._successCallback === 'function') {
        const data = {};
        if (installData && installData.allKeys) {
          let keys;
          try {
            keys = nsArrayToJSArray(installData.allKeys);
          } catch (e) {
            console.error(`AF-I :: onConversionDataReceived allKeys Error: ${e}`);
          }
          if (keys && keys.length) {
            for (const key of keys) {
              try {
                data[key] = installData.objectForKey(key);
              } catch (e) {
                console.error(`AF-I :: onConversionDataReceived objectForKey Error: ${e}`);
              }
            }
          }
        }
        this._successCallback(data);
      } else {
        console.error(`AF-I :: onConversionDataReceived: callback is not a function`);
      }
    }

    public onConversionDataFail(error: NSError): void {
      if (!this._failureCallback) {
        return;
      }
      if (typeof this._failureCallback === 'function') {
        try {
          this._failureCallback(`${error}`);
        } catch (e) {
          console.error(`AF-I :: onConversionDataRequestFailure Error: ${e}`);
        }
      } else {
        console.error(`AF-I :: onConversionDataRequestFailure: callback is not a function`);
      }
    }
}
