// @ts-nocheck
import { Utils } from "@nativescript/core";

import { AppsFlyerConsentArgs, InitSDKOptions, LogEventOptions } from "./index";

const nsArrayToJSArray = Utils.ios.collections.nsArrayToJSArray;

let _isDebugLocal = false;

let _conversionDataDelegate;
let _deepLinkDelegate;

const startSdk = function () {
  if (typeof AppsFlyerLib !== "undefined") {
    console.log("AF-I :: Starting AppsFlyer SDK");
    AppsFlyerLib.shared().start();
  } else {
    console.error("AF-I :: AppsFlyerLib is not defined, failed to start the SDK.");
  }
};

const initSdk = function (args: InitSDKOptions) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof AppsFlyerLib !== "undefined") {
        AppsFlyerLib.shared().appleAppID = args.appId;
        AppsFlyerLib.shared().appsFlyerDevKey = args.devKey;
        AppsFlyerLib.shared().isDebug = args.isDebug === true;

        if (args.timeToWaitForATTUserAuthorization) {
          AppsFlyerLib.shared().waitForATTUserAuthorizationWithTimeoutInterval(
            args.timeToWaitForATTUserAuthorization
          );
        }

        _isDebugLocal = AppsFlyerLib.shared().isDebug;

        if (_isDebugLocal) {
          console.log("AF-I :: appsFlyer.initSdk: " + JSON.stringify(args));
        }

        if (args.onConversionDataSuccess || args.onConversionDataFail) {
          try {
            _conversionDataDelegate = ConversionDataDelegate.initWithCallbacks(
              args.onConversionDataSuccess,
              args.onConversionDataFail,
              args.onAppOpenAttribution,
              args.onAppOpenAttributionFailure
            );
            AppsFlyerLib.shared().delegate = _conversionDataDelegate;
          } catch (e) {
            console.error(`AF-I :: delegate assignment Error: ${e}`);
          }
        }
        if (args.onDeepLinking) {
          try {
            _deepLinkDelegate = DeepLinkDelegate.DeepLinkCallback(
              args.onDeepLinking
            );
            AppsFlyerLib.shared().deepLinkDelegate = _deepLinkDelegate;
          } catch (e) {
            console.error(`AF-I :: onDeepLinking Error: ${e}`);
          }
        }

        AppsFlyerLib.shared().setPluginInfoWithPluginVersionAdditionalParams(
          AFSDKPlugin.AFSDKPluginNativeScript,
          "6.13.1",
          null
        );
        
        const shouldManuallyStart = args.manualStart === true;
        if (!shouldManuallyStart) {
          startSdk();
        }

        resolve({ status: "success" });
      } else {
        reject({ status: "failure", message: "AppsFlyer is not defined" });
      }
    } catch (ex) {
      console.log("AF_IOS ::  Error: " + ex);
      reject(ex);
    }
  });
};

const logEvent = function (args: LogEventOptions) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof AppsFlyerLib !== "undefined") {
        if (_isDebugLocal) {
          console.log("AF-I :: appsFlyer.logEvent: " + JSON.stringify(args));
        }

        AppsFlyerLib.shared().logEventWithValues(
          args.eventName,
          <any>args.eventValues
        );

        resolve({ status: "success" });
      } else {
        reject({
          status: "failure",
          message: "AppsFlyer is not defined, call 1st 'initSdk'",
        });
      }
    } catch (ex) {
      console.log("AF_IOS ::  Error: " + ex);
      reject(ex);
    }
  });
};

const getAppsFlyerUID = function () {
  if (typeof AppsFlyerLib !== "undefined") {
    return AppsFlyerLib.shared().getAppsFlyerUID();
  } else {
    throw new Error("AppsFlyer is not defined, call 'initSdk' first.");
  }
};

const enableTCFDataCollection = function (shouldCollect: bool) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof AppsFlyerLib !== "undefined") {
        AppsFlyerLib.shared().enableTCFDataCollection(shouldCollect);

        resolve({ status: "success" });
      } else {
        reject({
          status: "failure",
          message: "AppsFlyer is not defined, call 1st 'initSdk'",
        });
      }
    } catch (ex) {
      console.log("AF_IOS ::  Error: " + ex);
      reject(ex);
    }
  });
};

const stop = function (isStopped: bool) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof AppsFlyerLib !== "undefined") {
        AppsFlyerLib.shared().isStopped = isStopped;

        resolve({ status: "success" });
      } else {
        reject({
          status: "failure",
          message: "AppsFlyer is not defined, call 1st 'initSdk'",
        });
      }
    } catch (ex) {
      console.log("AF_IOS ::  Error: " + ex);
      reject(ex);
    }
  });
};

const setCustomerUserId = function (userId: string) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof AppsFlyerLib !== "undefined") {
        AppsFlyerLib.shared().customerUserID = userId;

        resolve({ status: "success" });
      } else {
        reject({
          status: "failure",
          message: "AppsFlyer is not defined, call 1st 'initSdk'",
        });
      }
    } catch (ex) {
      console.log("AF_IOS ::  Error: " + ex);
      reject(ex);
    }
  });
};

const setAppInviteOneLink = function (link: string) {
  return new Promise(function (resolve, reject) {
    try {
      if (typeof AppsFlyerLib !== "undefined") {
        AppsFlyerLib.shared().appInviteOneLinkID = link;

        resolve({ status: "success" });
      } else {
        reject({
          status: "failure",
          message: "AppsFlyer is not defined, call 1st 'initSdk'",
        });
      }
    } catch (ex) {
      console.log("AF_IOS ::  Error: " + ex);
      reject(ex);
    }
  });
};

const setConsentData = function (consent) {
  return new Promise((resolve, reject) => {
    try {
      if (typeof AppsFlyerLib === "undefined") {
        throw new Error("AppsFlyerLib is not defined");
      }
      let consentData;
      // Check if isUserSubjectToGDPR is explicitly true
      if (consent.isUserSubjectToGDPR === true) {
        // Provide default values for booleans if not defined
        const hasConsentForDataUsage = consent.hasConsentForDataUsage === true;
        const hasConsentForAdsPersonalization = consent.hasConsentForAdsPersonalization === true;
        consentData = AppsFlyerConsent.alloc().initForGDPRUserWithHasConsentForDataUsageHasConsentForAdsPersonalization(
          hasConsentForDataUsage,
          hasConsentForAdsPersonalization
        );
      } else {
        consentData = AppsFlyerConsent.alloc().initNonGDPRUser();
      }
      AppsFlyerLib.shared().setConsentData(consentData);
      resolve({ status: "success" });
    } catch (ex) {
      reject(new Error(`Error setting consent data: ${ex.message}`));
    }
  });
};

const generateInviteUrl = function (args: AppsFlyerLinkGeneratorArgs) {
  return new Promise(function (resolve, reject) {
    try {
      const params = args.params;
      const channel: String = params.channel;
      const campaign: String = params.campaign;
      const referrerName: String = params.referrerName;
      const referrerImageUrl: String = params.referrerImageUrl;
      const customerID: String = params.customerID;
      const baseDeepLink: String = params.baseDeepLink;
      const brandDomain: String = params.brandDomain;

      const linkGenerator: function = function (
        linkGenerator: AppsFlyerLinkGenerator
      ) {
        if (channel != null && channel != "") {
          linkGenerator.setChannel(String(channel));
        }
        if (campaign != null && campaign != "") {
          linkGenerator.setCampaign(String(campaign));
        }
        if (referrerName != null && referrerName != "") {
          linkGenerator.setReferrerName(String(referrerName));
        }
        if (referrerImageUrl != null && referrerImageUrl != "") {
          linkGenerator.setReferrerImageURL(String(referrerImageUrl));
        }
        if (customerID != null && customerID != "") {
          linkGenerator.setReferrerCustomerId(String(customerID));
        }
        if (baseDeepLink != null && baseDeepLink != "") {
          linkGenerator.setBaseDeeplink(String(baseDeepLink));
        }
        if (brandDomain != null && brandDomain != "") {
          linkGenerator.brandDomain = brandDomain;
        }

        if (!isEmpty(params.userParams)) {
          Object.entries(params.userParams).forEach(([key, value]) => {
            linkGenerator.addParameterValueForKey(String(value), key);
          });
        }
        return linkGenerator;
      };

      let completionHandler = function (url: string) {};
      if (args.onSuccess && args.onError) {
        completionHandler = function (url: string) {
          if (url !== null) {
            args.onSuccess(url);
          } else {
            args.onError("failed to generate link");
          }
        };
      }

      AppsFlyerShareInviteHelper.generateInviteUrlWithLinkGeneratorCompletionHandler(
        linkGenerator,
        completionHandler
      );
    } catch (ex) {
      console.log("AF_IOS ::  Error: " + ex);
      reject(ex);
    }
  });
};

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

@NativeClass
class DeepLinkDelegate extends NSObject implements AppsFlyerDeepLinkDelegate {
  public static ObjCProtocols = [AppsFlyerDeepLinkDelegate];

  private _didResolveDeepLink: (obj: Object) => void;

  public static DeepLinkCallback(
    didResolveDeepLink: (obj: Object) => void
  ): DeepLinkDelegate {
    const delegate: DeepLinkDelegate =
      DeepLinkDelegate.new() as DeepLinkDelegate;
    delegate._didResolveDeepLink = didResolveDeepLink;
    return delegate;
  }

  public didResolveDeepLink(DeepLinkResult: AppsFlyerDeepLinkResult): void {
    if (!this._didResolveDeepLink) {
      return;
    }
    if (typeof this._didResolveDeepLink === "function") {
      if (DeepLinkResult) {
        this._didResolveDeepLink(DeepLinkResult.deepLink);
      }
    } else {
      console.error(`AF-I :: _didResolveDeepLink: callback is not a function`);
    }
  }
}

@NativeClass
class ConversionDataDelegate extends NSObject implements AppsFlyerLibDelegate {
  public static ObjCProtocols = [AppsFlyerLibDelegate];

  private _gcdSuccessCallback: (obj: Object) => void;
  private _gcdFailureCallback: (err: string) => void;
  private _oaoaSuccessCallback: (obj: Object) => void;
  private _oaoaFailureCallback: (err: string) => void;

  public static initWithCallbacks(
    gcdSuccessCallback: (obj: Object) => void,
    gcdFailureCallback: (err: string) => void,
    oaoaSuccessCallback: (obj: Object) => void,
    oaoaFailureCallback: (err: string) => void
  ): ConversionDataDelegate {
    const delegate: ConversionDataDelegate =
      ConversionDataDelegate.new() as ConversionDataDelegate;
    delegate._gcdSuccessCallback = gcdSuccessCallback;
    delegate._gcdFailureCallback = gcdFailureCallback;
    delegate._oaoaSuccessCallback = oaoaSuccessCallback;
    delegate._oaoaFailureCallback = oaoaFailureCallback;
    return delegate;
  }

  public onConversionDataSuccess(
    installData: NSDictionary<string, string>
  ): void {
    if (!this._gcdSuccessCallback) {
      return;
    }
    if (typeof this._gcdSuccessCallback === "function") {
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
              console.error(
                `AF-I :: onConversionDataReceived objectForKey Error: ${e}`
              );
            }
          }
        }
      }
      this._gcdSuccessCallback(data);
    } else {
      console.error(
        `AF-I :: onConversionDataReceived: callback is not a function`
      );
    }
  }

  public onConversionDataFail(error: NSError): void {
    if (!this._gcdFailureCallback) {
      return;
    }
    if (typeof this._gcdFailureCallback === "function") {
      try {
        this._gcdFailureCallback(`${error}`);
      } catch (e) {
        console.error(`AF-I :: onConversionDataRequestFailure Error: ${e}`);
      }
    } else {
      console.error(
        `AF-I :: onConversionDataRequestFailure: callback is not a function`
      );
    }
  }

  onAppOpenAttribution?(attributionData: NSDictionary<any, any>): void {
    if (!this._oaoaSuccessCallback) {
      return;
    }
    if (typeof this._oaoaSuccessCallback === "function") {
      const data = {};
      if (attributionData && attributionData.allKeys) {
        let keys;
        try {
          keys = nsArrayToJSArray(attributionData.allKeys);
        } catch (e) {
          console.error(`AF-I :: onConversionDataReceived allKeys Error: ${e}`);
        }
        if (keys && keys.length) {
          for (const key of keys) {
            try {
              data[key] = attributionData.objectForKey(key);
            } catch (e) {
              console.error(
                `AF-I :: onConversionDataReceived objectForKey Error: ${e}`
              );
            }
          }
        }
      }
      this._oaoaSuccessCallback(data);
    } else {
      console.error(
        `AF-I :: onConversionDataReceived: callback is not a function`
      );
    }
  }

  onAppOpenAttributionFailure?(error: NSError): void {
    if (!this._oaoaFailureCallback) {
      return;
    }
    if (typeof this._oaoaFailureCallback === "function") {
      try {
        this._oaoaFailureCallback(`${error}`);
      } catch (e) {
        console.error(`AF-I :: onConversionDataRequestFailure Error: ${e}`);
      }
    } else {
      console.error(
        `AF-I :: onConversionDataRequestFailure: callback is not a function`
      );
    }
  }
}

export {
  initSdk,
  startSdk,
  logEvent,
  stop,
  setCustomerUserId,
  setAppInviteOneLink,
  generateInviteUrl,
  getAppsFlyerUID,
  enableTCFDataCollection,
  setConsentData,
};
