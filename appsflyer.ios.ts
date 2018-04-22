
import * as utils from "tns-core-modules/utils/utils";
import * as platform from "tns-core-modules/platform";
import {
  InitSDKOptions,
  TrackEventOptions,
} from './index';
import { ios } from 'tns-core-modules/utils/utils';
import nsArrayToJSArray = ios.collections.nsArrayToJSArray;

let _isDebugLocal = false;

let _conversionDataDelegate;

export const initSdk = function (args: InitSDKOptions) {

    return new Promise(function (resolve, reject) {
        try {
            if (typeof(AppsFlyerTracker) !== "undefined") {

                AppsFlyerTracker.sharedTracker().appleAppID = args.appId;
                AppsFlyerTracker.sharedTracker().appsFlyerDevKey = args.devKey;
                AppsFlyerTracker.sharedTracker().isDebug = args.isDebug === true;

                _isDebugLocal = AppsFlyerTracker.sharedTracker().isDebug;

                if (_isDebugLocal) {
                    console.log("AF-I :: appsFlyer.trackEvent: " + JSON.stringify(args));
                }

                if (args.onConversionDataSuccess || args.onConversionDataFailure) {
                  try {
                    _conversionDataDelegate = ConversionDataDelegate.initWithCallbacks(
                      args.onConversionDataSuccess,
                      args.onConversionDataFailure
                    );
                    AppsFlyerTracker.sharedTracker().delegate = _conversionDataDelegate;
                  } catch (e) {
                    console.error(`AF-I :: delegate assignment Error: ${e}`);
                  }
                }

                AppsFlyerTracker.sharedTracker().trackAppLaunch();

                resolve({status: "success"});
            } else {
                reject({status: "failure", message: "AppsFlyerTracker is not defined"});
            }
        } catch (ex) {
            console.log("AF_IOS ::  Error: " + ex);
            reject(ex);
        }
    });
};


export const trackEvent = function (args: TrackEventOptions) {

    return new Promise(function (resolve, reject) {
        try {

            if (typeof(AppsFlyerTracker) !== "undefined") {

                if (_isDebugLocal) {
                    console.log("AF-I :: appsFlyer.initSdk: " + JSON.stringify(args));
                }

                AppsFlyerTracker.sharedTracker().trackEventWithValues(args.eventName, <any>args.eventValues);

                resolve({status: "success"});
            } else {
                reject({status: "failure", message: "appsFlyerTracker is not defined, call 1st 'initSdk'"});
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

            if (typeof(AppsFlyerTracker) !== "undefined") {

                AppsFlyerTracker.sharedTracker().customerUserID = userId;

                resolve({status: "success"});
            } else {
                reject({status: "failure", message: "appsFlyerTracker is not defined, call 1st 'initSdk'"});
            }

        } catch (ex) {
            console.log("AF_IOS ::  Error: " + ex);
            reject(ex);
        }
    });
};

class ConversionDataDelegate extends NSObject implements AppsFlyerTrackerDelegate {
    public static ObjCProtocols = [AppsFlyerTrackerDelegate];

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

    public onConversionDataReceived(installData: NSDictionary<string, string>): void {
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

    public onConversionDataRequestFailure(error: NSError): void {
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
